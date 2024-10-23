import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 60000,
  use: {
    baseURL: process.env.API_BASE_URL || "https://reqres.in",
  },
};

export default config;
