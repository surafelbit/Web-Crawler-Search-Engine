import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import cors from "cors";
import { dotenvx } from "@dotenvx/dotenvx";

const app = express();
app.use(cors());
app.use(express.json());

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const PORT = 5000;

// 🔍 THE SEARCH ENDPOINT
app.get("/api/search", async (req, res) => {
  const { q } = req.query; // Grabs the keyword from the URL, e.g., /api/search?q=useState

  if (!q) {
    return res.status(400).json({ error: "Search query is required." });
  }

  try {
    console.log(`🔎 User searched for: "${q}"`);

    const results = await prisma.page.findMany({
      where: {
        OR: [
          { title: { contains: q, mode: "insensitive" } },
          { content: { contains: q, mode: "insensitive" } },
        ],
      },
      take: 10,
    });

    res.json({
      query: q,
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
