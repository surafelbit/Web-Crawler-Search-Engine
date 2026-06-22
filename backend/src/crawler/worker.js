import { Worker } from "bullmq";
import * as cheerio from "cheerio";
import axios from "axios";
import { URL } from "url";
import { REDIS_OPTIONS, crawlQueue } from "../queue/connection.js";

// 🔌 Prisma v7 Driver & Client Setup
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// Create a native node-postgres connection pool
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
