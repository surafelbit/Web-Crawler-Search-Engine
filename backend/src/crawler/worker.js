import { Worker } from "bullmq";
import { PrismaClient } from "@prisma/client";
import * as cheerio from "cheerio";
import axios from "axios";
import { URL } from "url";
import { REDIS_OPTIONS, crawlQueue } from "../queue/connection.js";

const prisma = new PrismaClient();

// Helper to extract the root domain so we don't accidentally crawl the whole internet
const getDomain = (urlStr) => {
  try {
    return new URL(urlStr).hostname;
  } catch {
    return null;
  }
};

const worker = new Worker(
  "crawl-queue",
  async (job) => {
    const { url } = job.data;
    const currentDomain = getDomain(url);

    if (!currentDomain) return;

    console.log(`\n==================================================`);
    console.log(`[🚀 PROCESSING] ${url}`);
    console.log(`==================================================`);

    try {
      // 1. Fetch HTML with a strict 10-second timeout
      const response = await axios.get(url, {
        timeout: 10000,
        headers: { "User-Agent": "DocuTraceCrawler/1.0" },
      });

      const contentType = response.headers["content-type"] || "";
      if (!contentType.includes("text/html")) {
        console.log(`[ℹ️ IGNORED] Non-HTML content type at ${url}`);
        return;
      }

      const html = response.data;

      // 2. Load DOM and sanitize
      const $ = cheerio.load(html);

      // Rip out the noise so our search index is pure content
      $("script, style, nav, footer, header, noscript, iframe").remove();

      const title = $("title").text().trim() || "Untitled Page";
      const sanitizedText = $("body").text().replace(/\s+/g, " ").trim();

      // 3. Save to PostgreSQL
      const savedPage = await prisma.page.upsert({
        where: { url },
        update: {
          title,
          content: sanitizedText,
          status: "CRAWLED",
        },
        create: {
          url,
          title,
          content: sanitizedText,
          status: "CRAWLED",
        },
      });

      console.log(
        `[💾 SAVED] Title: "${title}" (${sanitizedText.length} chars)`,
      );

      // 4. Extract and filter links
      const discoveredLinks = [];
      $("a[href]").each((_, element) => {
        const href = $(element).attr("href");
        try {
          // Resolve relative paths (/docs/api) to absolute URLs
          const absoluteUrl = new URL(href, url).href.split("#")[0];

          // Strict Rule: Only crawl pages on the exact same domain
          if (
            getDomain(absoluteUrl) === currentDomain &&
            absoluteUrl.startsWith("http")
          ) {
            discoveredLinks.push(absoluteUrl);
          }
        } catch {
          // Ignore invalid hrefs
        }
      });

      const uniqueLinks = [...new Set(discoveredLinks)];
      console.log(`[🔗 FOUND] ${uniqueLinks.length} internal links.`);

      // 5. Safely ingest new links
      for (const link of uniqueLinks) {
        const existingPage = await prisma.page.findUnique({
          where: { url: link },
          select: { id: true },
        });

        if (!existingPage) {
          // Mark as PENDING immediately so concurrent workers don't grab it twice
          const newPage = await prisma.page.create({
            data: { url: link, status: "PENDING" },
          });

          // Link the edges for potential PageRank scoring later
          await prisma.link
            .create({
              data: { sourceId: savedPage.id, targetId: newPage.id },
            })
            .catch(() => {}); // Catch unique constraint violations quietly

          await crawlQueue.add(`crawl-job`, { url: link });
          console.log(`   ➕ Enqueued: ${link}`);
        }
      }
    } catch (error) {
      const statusCode = error.response
        ? error.response.status
        : "TIMEOUT/NETWORK_ERR";
      console.error(
        `[❌ ERROR] Failed to crawl ${url} | Status: ${statusCode}`,
      );

      await prisma.page.upsert({
        where: { url },
        update: { status: "ERROR" },
        create: { url, status: "ERROR" },
      });
    }
  },
  {
    connection: REDIS_OPTIONS,
    concurrency: 5, // Process 5 URLs simultaneously
    limiter: {
      max: 2,
      duration: 1000, // Be polite: Max 2 requests per second to the target server
    },
  },
);

console.log("🤖 Crawler Worker is online and listening for jobs...");

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("Shutting down worker gracefully...");
  await worker.close();
  await prisma.$disconnect();
  process.exit(0);
});
