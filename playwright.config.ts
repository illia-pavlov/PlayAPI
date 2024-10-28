import dotenv from "dotenv";

dotenv.config();

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "API Tests",
      testDir: "./src/tests/api", // Directory for API tests
      use: {
        baseURL: process.env.API_BASE_URL || "https://reqres.in",
      },
    },
    {
      name: "UI Tests",
      testDir: "./src/tests/ui", // Directory for UI tests
      use: {
        baseURL:
          process.env.UI_BASE_URL || "https://shopdemo-alex-hot.koyeb.app/", // Update to your UI's base URL
      },
    },
  ],
});
