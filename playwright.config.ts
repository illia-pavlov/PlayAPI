import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const config: PlaywrightTestConfig = {
  timeout: 60000,
  use: {
    baseURL: process.env.API_BASE_URL || "https://reqres.in",
  },
  reporter: [["html", { outputFolder: "test-results", open: "never" }]],
};

export default config;
