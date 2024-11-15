import { test } from "playwright/test";
import { ApplicationAPI } from "../../api";
import { User } from "../../utils/api/types/types";
import { generateRandomUser } from "../../utils/api/userDataUtils";
import { EnvConfig } from "../../utils/EnvConfig";

test.describe("Login", () => {
  test("Able to login as Admin with valid credentials", async ({ request }) => {
    const api = new ApplicationAPI(request);
    await api.auth.login({
      email: EnvConfig.getVariable("ADMIN_EMAIL"),
      password: EnvConfig.getVariable("ADMIN_PASSWORD"),
    });
  });
  test("Able to register new user", async ({ request }) => {
    const api = new ApplicationAPI(request);
    const newUser: User = generateRandomUser();
    await api.auth.createNewUser(newUser);
  });
});
