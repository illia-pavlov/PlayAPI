import { test, expect } from "@playwright/test";
import { UsersController } from "../controllers/usersController";


test("Get API response", async ({ request }) => {
  const usersController = new UsersController(request);

  const response = await usersController.getUsers(2);

  expect(response.ok()).toBeTruthy();
  const data = await response.json();

  expect(data).toHaveProperty("page");
});
