import { test, expect } from "@playwright/test";
import { UsersController } from "../controllers/usersController";
import { verifyStatusCode } from "../../utils/responseHelpers";

test.describe("User API Tests", () => {
  test("should fetch users for a specific page", async ({ request }) => {
    const usersController = new UsersController(request);
    const response = await usersController.getUsers(2);
    verifyStatusCode(response, 200);
    const data = await response.json();
    expect(data).toHaveProperty("page");
  });

  test("should create a new user", async ({ request }) => {
    const usersController = new UsersController(request);

    // Define the user data
    const userData = {
      name: "morpheus",
      job: "leader",
    };

    // Create user and verify response
    const response = await usersController.createUser(userData);

    // Verify the response body and status
    let data = await response.json();
    expect(data).toHaveProperty("name", "morpheus");
    expect(data).toHaveProperty("job", "leader");
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("createdAt");
    verifyStatusCode(response, 201);
  });
});
