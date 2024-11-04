import { test } from "@playwright/test";
import { AuthController } from "../../controllers/authController";
import { generateRandomUser } from "../../../utils/api/userDataUtils";
import { User } from "../../types/types";
import {
  assertStatusCode,
  assertProperties,
} from "../../../utils/api/responseHelpers";

test.describe("User API Tests", () => {
  test("should register a new user", async ({ request }) => {
    const authController = new AuthController(request);
    const generatedUser: User = generateRandomUser();

    const response = await authController.register(generatedUser);
    const { user: registeredUser } = await response.json();

    assertStatusCode(response, 200);
    assertProperties(registeredUser, generatedUser);
  });
});
