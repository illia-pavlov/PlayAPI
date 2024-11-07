import type { FullConfig } from "@playwright/test";
import { chromium } from "@playwright/test";

export default async function globalSetup(config: FullConfig) {
  console.log("[CACHE WARMER] Warming up static files cache...");
  console.time("[CACHE WARMER] Done warming up static files cache.");

  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordHar: {
      path: "cache/cache.har",
      urlFilter: /^.*\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/,
    },
  });

  const page = await context.newPage();

  const url: string = process.env.UI_BASE_URL as string;
  await page.goto(url, {
    waitUntil: "networkidle",
  });
  await page.close();
  await context.close();
  await browser.close();
  console.timeEnd("[CACHE WARMER] Done warming up static files cache.");
}
