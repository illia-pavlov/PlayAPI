import { expect } from "@playwright/test";
import { test } from "../fixtures";
import { UserController } from "../../controllers/userController";
import { verifyStatusCode } from "../../../utils/api/responseHelpers";

test.describe("User API Tests", () => {
  test("should get user info using the stored token", async ({
    request,
    authToken,
  }) => {
    expect(authToken).toBeDefined();
    const userController = new UserController(request);

    const response = await userController.getUser(authToken);

    verifyStatusCode(response, 200);
  });
});
