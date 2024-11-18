import { test } from "playwright/test";
import { Application } from "../../app";

test("test users", async ({ page }) => {
  const app = new Application(page);
  await app.initialize();

  const brands = await app.db.brandService.getAllBrands();
  console.log("Brands:", brands);

  await app.close();
});

test("Able to open home page", async ({ page }) => {
  const app = new Application(page);
  await app.home.open();
});
