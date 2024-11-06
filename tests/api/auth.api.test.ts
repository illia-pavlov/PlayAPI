import { test } from "playwright/test";
import { ApplicationAPI } from "../../api";

test("Able to login with valid credentials", async ({ request }) => {
  const api = new ApplicationAPI(request); // will be initialised in fixture
  await api.auth.login({
    email: "test123@test.test",
    password: "test123@test.test",
  });

  // await app.api.auth.login({
  //   email: "test123@test.test",
  //   password: "test123@test.test",
  // });
});
