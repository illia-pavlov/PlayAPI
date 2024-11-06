import { test } from "playwright/test";
import { Application } from "../../app";

test.describe("Login", () => {
  test("Able to login with valid credentials", async ({ page }) => {
    const app = new Application(page);
    await app.login.open();

    // TODO move test data from test to test data file
    await app.login.login({
      email: "test123@test.test",
      password: "test123@test.test",
    });
    await app.dashboard.expectLoaded();
  });

  test("Should not be able to login with blank email and password", async ({
    page,
  }) => {
    const app = new Application(page);
    await app.login.open();
    await app.login.login({
      email: "",
      password: "",
    });
    await app.login.expectErrors();
    await app.login.expectLoaded();
  });
});
