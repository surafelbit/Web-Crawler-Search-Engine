import { Worker } from "bullmq";
import * as cheerio from "cheerio";
import axios from "axios";
import { URL } from "url";
import { REDIS_OPTIONS, crawlQueue } from "../queue/connection.js";

// 🔌 Prisma v7 Driver & Client Setup
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// ... top imports and Prisma setup remain the same ...

console.log("📍 [CHECKPOINT 3] BullMQ Worker instantiated.");

// Use crawlQueue.name to guarantee the worker and seed script use the EXACT same queue room
const worker = new Worker(
  crawlQueue.name, // 🔥 Changed from 'crawl-queue' to match your system setup
  async (job) => {
    // 🚨 ADD THIS LOG LINE RIGHT HERE:
    console.log(
      `👉 [QUEUE ALERT] Worker just grabbed job ${job.id}! Processing URL: ${job.data.url}`,
    );

    try {
      // ... your existing scraping/crawling code goes here ...
      // const savedPage = await prisma.page.upsert({ ... })
      // ...
    } catch (error) {
      console.error(`❌ Error processing job ${job.id}:`, error);
      throw error;
    }
  },
  {
    connection: REDIS_OPTIONS,
    concurrency: 5,
    limiter: {
      max: 2,
      duration: 1000,
    },
  },
);

console.log("🤖 Crawler Worker is online and listening for jobs...");
