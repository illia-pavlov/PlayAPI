import { test } from "playwright/test";
import { Application } from "../../../app";

test("Able to login with valid credentials", async ({ page }) => {
  const app = new Application(page);
  await app.login.open();
  await app.login.login({
    email: "test123@test.test",
    password: "test123@test.test",
  });
  await app.dashboard.expectLoaded();
});
