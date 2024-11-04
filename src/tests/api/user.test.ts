import { expect } from "@playwright/test";
import { registerAndRetrieveAuthToken } from "../fixtures";
import { UserController } from "../../controllers/userController";
import {
  assertStatusCode,
  assertProperties,
} from "../../../utils/api/responseHelpers";

registerAndRetrieveAuthToken.describe("User API Tests", () => {
  let userController: UserController;

  registerAndRetrieveAuthToken.beforeEach(async ({ request }) => {
    userController = new UserController(request);
  });

  registerAndRetrieveAuthToken(
    "should retrieve user info successfully",
    async ({ account }) => {
      expect(account.token).toBeDefined();

      const response = await userController.getUser(account.token);
      const { user: userResponseBody } = await response.json();
      
      assertStatusCode(response, 200);
      assertProperties(userResponseBody, account.userData);
    }
  );
});
