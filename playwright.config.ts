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
  reporter: [
    ["html"],
    ["json", { outputFile: "test-results/results.json" }],
    // ["./misc/reporters/slowStepReporter.ts"],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 30000,
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: process.env.UI_BASE_URL,
    actionTimeout: 15 * 1000,
  },
  globalSetup: require.resolve("./misc/cacheWarmer.ts"),
  projects: [
    {
      name: "API Tests",
      testDir: "./tests/api",
      use: {
        baseURL: process.env.API_BASE_URL,
      },
    },
    {
      name: "UI Tests - Chromium",
      testDir: "./tests/ui",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.UI_BASE_URL,
        browserName: "chromium",
      },
    },
    // {
    //   name: "UI Tests - Firefox",
    //   testDir: "./src/tests/ui",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     baseURL: process.env.UI_BASE_URL,
    //     browserName: "firefox",
    //   },
    // },
    // {
    //   name: "UI Tests - WebKit",
    //   testDir: "./src/tests/ui",
    //   use: {
    //     ...devices["Desktop Safari"],
    //     baseURL: process.env.UI_BASE_URL,
    //     browserName: "webkit",
    //   },
    // },
  ],
});
