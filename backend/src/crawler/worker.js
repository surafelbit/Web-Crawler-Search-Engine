import { Worker } from "bullmq";
import * as cheerio from "cheerio";
import axios from "axios";
import { URL } from "url";
import { REDIS_OPTIONS, crawlQueue } from "../queue/connection.js";

// 🔌 Prisma v7 Driver & Client Setup
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

console.log("📍 [CHECKPOINT 1] Imports loaded successfully.");

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

console.log("📍 [CHECKPOINT 2] Database Driver & Prisma Client ready.");

const worker = new Worker(
  "crawl-queue",
  async (job) => {
    // ... leave the entire internal async (job) code exactly as it is ...
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

console.log("📍 [CHECKPOINT 3] BullMQ Worker instantiated.");
console.log("🤖 Crawler Worker is online and listening for jobs...");

// ... leave the graceful shutdown code at the bottom as it is ...
