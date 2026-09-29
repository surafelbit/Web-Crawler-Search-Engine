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

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const PORT = 5000;

app.get("/api/search", async (req, res) => {
  const query = normalizeSearchQuery(req.query.q);

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
      take: 10,
    });

    res.json({
      query,
      count: results.length,
      data: results,
    });
  } catch (error) {
    console.error("❌ Search API Error:", error);
    res
      .status(500)
      .json({ error: "Internal server error occurred during search." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 DocuTrace Search Server is live on http://localhost:${PORT}`);
});
