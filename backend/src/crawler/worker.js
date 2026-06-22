import { Worker } from "bullmq";
import * as cheerio from "cheerio";
import axios from "axios";
import { REDIS_OPTIONS, crawlQueue } from "../queue/connection.js";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

console.log("🔌 Database & Redis systems prepared.");

const worker = new Worker(
  crawlQueue.name,
  async (job) => {
    console.log(
      `\n👉 [QUEUE ALERT] Worker just grabbed job ${job.id}! Processing URL: ${job.data.url}`,
    );

    try {
      console.log("📡 Step 1: Sending Axios request to fetch HTML...");
      const response = await axios.get(job.data.url, {
        timeout: 10000,
        headers: { "User-Agent": "DocuTraceBot/1.0" },
      });
      const html = response.data;
      console.log(
        `📥 Step 2: HTML received successfully! Character length: ${html.length}`,
      );

      console.log("✂️ Step 3: Loading Cheerio to extract metadata...");
      const $ = cheerio.load(html);
      const title = $("title").text().trim() || "No Title";
      console.log(`🏷️ Found Page Title: "${title}"`);

      // Grabbing raw page content to index
      const bodyText = $("main").text() || $("body").text() || "";
      const cleanText = bodyText.replace(/\s+/g, " ").trim();
      console.log(`📄 Cleaned text sample: "${cleanText.slice(0, 100)}..."`);

      console.log(
        "💾 Step 4: Attempting to write data to PostgreSQL via Prisma...",
      );

      // 🔥 CRITICAL: Double-check if your model name is exactly 'page' in your prisma schema
      await prisma.page.upsert({
        where: { url: job.data.url },
        update: { title, content: cleanText },
        create: { url: job.data.url, title, content: cleanText },
      });

      console.log("✅ Step 5: Database write SUCCESSFUL! Task complete.");
    } catch (error) {
      console.error(`\n❌ ERROR caught inside job handler for Job ${job.id}:`);
      if (error.code === "ECONNABORTED") {
        console.error(
          "⏱️ Network request timed out while trying to reach the website.",
        );
      } else {
        console.error(`Message: ${error.message}`);
        console.error(error.stack);
      }
    }
  },
  {
    connection: REDIS_OPTIONS,
    concurrency: 1, // lowered to 1 temporarily for clean debugging logs
  },
);

console.log("🤖 Crawler Worker is online and listening for jobs...");
