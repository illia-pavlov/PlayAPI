import { test } from "@playwright/test";
import { AuthController } from "../../controllers/authController";
import {
  verifyStatusCode,
  verifyProperties,
} from "../../../utils/api/responseHelpers";
import {
  generateRandomUser,
  createUserObject,
} from "../../../utils/api/userDataUtils";
import { User } from "../../types/types";

let authToken: string;

test.describe("User API Tests", () => {
  test("should register a new user", async ({ request }) => {
    const authController = new AuthController(request);
    const newUser: User = generateRandomUser();

    const response = await authController.register(newUser);

    const responseData = await response.json();
    authToken = responseData.token;
    const userObject = createUserObject(responseData);
    const { password, ...newUserWithoutPassword } = newUser;

    verifyStatusCode(response, 200);
    verifyProperties(userObject, newUserWithoutPassword);
  });
});
