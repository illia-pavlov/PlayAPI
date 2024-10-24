import { test } from "@playwright/test";
import { UsersController } from "../controllers/usersController";
import {
  verifyStatusCode,
  verifyProperties,
} from "../../utils/responseHelpers";
import { userData } from "../data/userData";

test.describe("User API Tests", () => {
  test("should fetch users for a specific page", async ({ request }) => {
    const usersController = new UsersController(request);
    const response = await usersController.getUsers(2);
    const data = await response.json();

    verifyStatusCode(response, 200);
    verifyProperties(data, [{ key: "page", value: 2 }]);
  });

  test("should create a new user", async ({ request }) => {
    const usersController = new UsersController(request);
    const response = await usersController.createUser(userData.createUser);
    const data = await response.json();

    verifyStatusCode(response, 201);
    verifyProperties(data, [
      { key: "name", value: "morpheus" },
      { key: "job", value: "leader" },
      { key: "id" },
      { key: "createdAt" },
    ]);
  });
});
