import { test, expect } from "@playwright/test";
import { UsersController } from "../controllers/usersController";

test.describe("User API Tests", () => {
  test("should fetch users for a specific page", async ({ request }) => {
    const usersController = new UsersController(request);
    const response = await usersController.getUsers(2);
    expect(response.ok()).toBeTruthy();
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
    expect(response).toHaveProperty("name", "morpheus");
    expect(response).toHaveProperty("job", "leader");
    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("createdAt");

    console.log("User created successfully:", response);
  });
});
