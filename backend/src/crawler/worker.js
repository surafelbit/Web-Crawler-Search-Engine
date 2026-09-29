import "dotenv/config";
import { Worker } from "bullmq";
import * as cheerio from "cheerio";
import axios from "axios";
import { REDIS_OPTIONS, crawlQueue } from "../queue/connection.js";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set. Add it to backend/.env before starting the worker.",
  );
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const shutdown = async (signal) => {
  console.log(`🛑 Worker received ${signal}; shutting down gracefully...`);
  await Promise.allSettled([prisma.$disconnect(), pool.end()]);
  process.exit(0);
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

console.log("🔌 Database & Redis systems prepared.");

const worker = new Worker(
  crawlQueue.name,
  async (job) => {
    console.log(
      `\n👉 [QUEUE ALERT] Worker processing Job #${job.id} | URL: ${job.data.url}`,
    );

    try {
      console.log("📡 Step 1: Sending Axios request to fetch HTML...");
      const response = await axios.get(job.data.url, {
        timeout: 10000,
        maxContentLength: 10 * 1024 * 1024, // 10MB safety limit
        headers: {
          "User-Agent":
            "DocuTraceBot/1.0 (+https://github.com/surafelbit/Web-Crawler-Search-Engine)",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      });

      const contentType = response.headers["content-type"] || "";
      if (
        !contentType.includes("text/html") &&
        !contentType.includes("application/xhtml+xml")
      ) {
        console.log(
          `⏩ Skipping non-HTML content (${contentType}): ${job.data.url}`,
        );
        return;
      }

      const html = response.data;
      console.log(
        `📥 Step 2: HTML received successfully! Character length: ${html.length}`,
      );

      console.log("✂️ Step 3: Loading Cheerio to extract metadata...");
      const $ = cheerio.load(html);

      // Strip non-content and boilerplate elements before extracting text
      $(
        "script, style, noscript, svg, nav, footer, header, iframe, button, dialog",
      ).remove();

      const rawTitle =
        $("title").first().text().trim() ||
        $("h1").first().text().trim() ||
        "No Title";
      const title = rawTitle.replace(/\s+/g, " ").trim();
      console.log(`🏷️ Found Page Title: "${title}"`);

      // Extract text prioritizing main/article containers, falling back to body
      const contentEl = $("main").length
        ? $("main")
        : $("article").length
          ? $("article")
          : $("body");
      const cleanText = contentEl.text().replace(/\s+/g, " ").trim();
      console.log(`📄 Cleaned text sample: "${cleanText.slice(0, 100)}..."`);

      console.log(
        "💾 Step 4: Writing crawled data to PostgreSQL via Prisma...",
      );

      await prisma.page.upsert({
        where: { url: job.data.url },
        update: {
          title,
          content: cleanText,
          status: "CRAWLED",
        },
        create: {
          url: job.data.url,
          title,
          content: cleanText,
          status: "CRAWLED",
        },
      });

      console.log(
        `✅ Step 5: Page successfully saved as CRAWLED for ${job.data.url}`,
      );
    } catch (error) {
      console.error(`\n❌ ERROR caught inside job handler for Job ${job.id}:`);
      if (error.code === "ECONNABORTED") {
        console.error(
          "⏱️ Network request timed out while trying to reach the website.",
        );
      } else {
        console.error(`Message: ${error.message}`);
      }

      // Record error status in database
      try {
        await prisma.page.upsert({
          where: { url: job.data.url },
          update: { status: "ERROR" },
          create: { url: job.data.url, status: "ERROR" },
        });
      } catch (dbErr) {
        console.error("Failed to mark page as ERROR in DB:", dbErr.message);
      }

      // Re-throw so BullMQ triggers retries and tracks failed jobs properly
      throw error;
    }
  },
  {
    connection: REDIS_OPTIONS,
    concurrency: 1,
  },
);

worker.on("completed", (job) => {
  console.log(`🎉 Job #${job.id} (${job.data.url}) completed successfully.`);
});

worker.on("failed", (job, err) => {
  console.error(
    `💥 Job #${job?.id} (${job?.data?.url}) failed: ${err.message}. Attempts: ${job?.attemptsMade}/${job?.opts?.attempts}`,
  );
});

worker.on("error", (err) => {
  if (err.code !== "ECONNREFUSED") {
    console.error("Worker error:", err.message);
  }
});

console.log("🤖 Crawler Worker is online and listening for jobs...");
