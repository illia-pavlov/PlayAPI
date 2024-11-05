import { test } from "playwright/test";
import { Application } from "../../app";

test("Able to login with valid credentials", async ({ page }) => {
  const app = new Application(page); // will be initialised in fixture
  await app.api.auth.login({
    email: "test123@test.test",
    password: "test123@test.test",
  });
});
