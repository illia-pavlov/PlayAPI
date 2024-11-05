import { test } from "playwright/test";
import { Application } from "../../app";

test("Able to open home page", async ({ page }) => {
  const app = new Application(page);
  await app.home.open();
});
