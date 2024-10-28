import { test, expect } from "@playwright/test";
import { ShopHomePage } from "../../pages/ShopHomePage";

test("Able to open home page", async ({ page }) => {
  const shopHomePage = new ShopHomePage(page);

  await shopHomePage.goto();
  const title = await page.title();
  expect(title).toContain("MERN Store");
});
