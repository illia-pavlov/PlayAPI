import { test } from "@playwright/test";
import { Application } from "../app";

export const baseFixture = test.extend<{ app: Application }>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },
});

export type DefaultUserOption = {
  defaultUser: {
    email: string;
    password: string;
  };
};

export const loggedUser = baseFixture.extend<
  DefaultUserOption & { app: Application }
>({
  defaultUser: [
    {
      email: "test123@test.test",
      password: "test123@test.test",
    },
    {
      option: true,
    },
  ],
  app: async ({ app, defaultUser, page }, use) => {
    await page.routeFromHAR("cache/cache.har", {
      notFound: "fallback",
    });
    await app.headlessLogin(defaultUser);
    await use(app);
  },
});
