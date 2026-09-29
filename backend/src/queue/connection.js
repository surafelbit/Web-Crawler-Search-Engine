import { Queue } from "bullmq";
import dotenv from "dotenv";

// Load variables from your .env file
dotenv.config();

export const REDIS_OPTIONS = {
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: parseInt(process.env.REDIS_PORT || "6379", 10),
  maxRetriesPerRequest: null,
};

// Initialize the main queue for our crawler
export const crawlQueue = new Queue("crawl-queue", {
  connection: REDIS_OPTIONS,
  defaultJobOptions: {
    attempts: 3, // If a page fetch fails (e.g., timeout), try 3 times before giving up
    backoff: {
      type: "exponential",
      delay: 5000, // Wait 5 seconds, then 10s, then 20s on subsequent failures
    },
    removeOnComplete: true, // Automatically delete successful jobs to prevent Redis memory bloat
    removeOnFail: 1000, // Keep a log of the last 1000 failed jobs for debugging
  },
});

crawlQueue.on("error", (err) => {
  if (err.code !== "ECONNREFUSED") {
    console.error("Queue connection error:", err.message);
  }
});

console.log("🔌 Redis Queue connection initialized.");
