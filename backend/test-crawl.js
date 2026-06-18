import { crawlQueue } from "./src/queue/connection.js";

async function seed() {
  // We'll test it on a standard developer documentation site
  const rootUrl = "https://react.dev/reference/react";

  console.log(`Seeding initial target: ${rootUrl}`);
  await crawlQueue.add("initial-crawl", { url: rootUrl });
  console.log("Seed job added! The worker should pick it up immediately.");

  // Close the script so it doesn't hang your terminal
  setTimeout(() => process.exit(0), 1000);
}

seed();
