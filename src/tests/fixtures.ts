import { test as base } from "@playwright/test";
import { AuthController } from "../controllers/authController";
import { generateRandomUser } from "../../utils/api/userDataUtils";
import { User } from "../types/types";

type TestContext = {
  authToken: string;
};

const test = base.extend<TestContext>({
  authToken: async ({ request }, use) => {
    const authController = new AuthController(request);
    const newUser: User = generateRandomUser();

    const response = await authController.register(newUser);
    const responseData = await response.json();

    if (responseData.token) {
      await use(responseData.token);
    } else {
      throw new Error("Token not received during user registration");
    }
  },
});

export { test };
