import { baseFixture } from "../../fixtures";

baseFixture.describe("Login", () => {
  baseFixture(
    "Able to login with valid credentials",
    async ({ app: { login, dashboard } }) => {
      await login.open();

      const email = process.env.ADMIN_EMAIL;
      const password = process.env.ADMIN_PASSWORD;

      if (!email || !password) {
        throw new Error(
          "Environment variables ADMIN_EMAIL and ADMIN_PASSWORD must be defined"
        );
      }
      await login.login({
        email,
        password
      });
      await dashboard.expectLoaded();
    }
  );

  baseFixture(
    "Should not be able to login with blank email and password",
    async ({ app: { login } }) => {
      await login.open();
      await login.login({
        email: "",
        password: "",
      });
      await login.expectErrors();
      await login.expectLoaded();
    }
  );
});
