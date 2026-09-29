import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import cors from "cors";
import "dotenv/config";
import { normalizeSearchQuery } from "./utils/searchQuery.js";

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Add it to backend/.env before starting the API.");
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const PORT = Number(process.env.PORT) || 5000;

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "docutrace-search",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/search", async (req, res) => {
  const query = normalizeSearchQuery(req.query.q);
  const requestedLimit = Number(req.query.limit);
  const safeLimit = Number.isFinite(requestedLimit)
    ? Math.min(Math.max(requestedLimit, 1), 50)
    : 10;

  if (!query) {
    return res.status(400).json({ error: "Search query is required." });
  }

  try {
    console.log(`🔎 User searched for: "${query}"`);

    const results = await prisma.page.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
        ],
      },
      take: safeLimit,
    });

    res.json({
      query,
      count: results.length,
      limit: safeLimit,
      data: results,
    });
  } catch (error) {
    console.error("❌ Search API Error:", error);
    res
      .status(500)
      .json({ error: "Internal server error occurred during search." });
  }
});

const server = app.listen(PORT, () => {
  console.log(`🚀 DocuTrace Search Server is live on http://localhost:${PORT}`);
});

const shutdown = async (signal) => {
  console.log(`🛑 Received ${signal}; shutting down gracefully...`);

  server.close(async () => {
    await Promise.allSettled([prisma.$disconnect(), pool.end()]);
    process.exit(0);
  });

  setTimeout(() => {
    console.error("⚠️ Graceful shutdown timed out; forcing exit.");
    process.exit(1);
  }, 5000);
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
