import { test } from "@playwright/test";
import { AuthController } from "../../controllers/authController";
import { generateRandomUser } from "../../../utils/api/userDataUtils";
import { User } from "../../types/types";
import {
  assertStatusCode,
  assertPropertiesEqual,
} from "../../../utils/api/responseHelpers";

test.describe("User API Tests", () => {
  test("should register a new user", async ({ request }) => {
    const authController = new AuthController(request);
    const newUser: User = generateRandomUser();

    const response = await authController.register(newUser);
    const responseData = await response.json();

    const registeredUser = responseData.user;

    const { id, role, ...userFromResponse } = registeredUser;
    const { password, isSubscribed, ...generatedUser } = newUser;

    assertStatusCode(response, 200);
    assertPropertiesEqual(userFromResponse, generatedUser);
  });
});
