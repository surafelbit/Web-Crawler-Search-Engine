import express from "express";
import { normalizeSearchQuery } from "../utils/searchQuery.js";

export default function createSearchRouter(prisma) {
  const router = express.Router();

  router.get("/search", async (req, res) => {
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
      res.status(500).json({ error: "Internal server error occurred during search." });
    }
  });

  return router;
}
