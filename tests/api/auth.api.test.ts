import { test } from "playwright/test";
import { ApplicationAPI } from "../../api";
import { User } from "../../utils/api/types/types";
import { generateRandomUser } from "../../utils/api/userDataUtils";

test.describe("Login", () => {
  test("Able to login with valid credentials", async ({ request }) => {
    const api = new ApplicationAPI(request);
    await api.auth.login({
      email: "test123@test.test",
      password: "test123@test.test",
    });
  });
  test("Able to register new user", async ({ request }) => {
    const api = new ApplicationAPI(request);
    const newUser: User = generateRandomUser();
    await api.auth.createNewUser(newUser);
  });
});
