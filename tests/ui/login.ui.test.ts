import { baseFixture } from "../../fixtures";

baseFixture.describe("Login", () => {
  baseFixture(
    "Able to login with valid credentials",
    async ({ app: { login, dashboard } }) => {
      await login.open();

      // TODO move test data from test to test data file
      await login.login({
        email: "test123@test.test",
        password: "test123@test.test",
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
