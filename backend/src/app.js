import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { normalizeSearchQuery } from "./utils/searchQuery.js";

// Ensure we load the .env located in the backend folder (not the repository root)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set. Add it to backend/.env before starting the API.",
  );
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

  if (!query || query.length < 2) {
    return res.status(400).json({
      error: "Search query must be at least 2 characters long.",
    });
  }
//
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

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.use((error, _req, res, _next) => {
  console.error("Unhandled API error:", error);
  res.status(500).json({ error: "Something went wrong on the server." });
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
