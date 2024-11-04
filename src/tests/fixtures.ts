import { APIRequestContext, test } from "@playwright/test";
import { AuthController } from "../controllers/authController";
import { generateRandomUser } from "../../utils/api/userDataUtils";
import { User } from "../types/types";

type Account = {
  token: string;
  userData: User;
};

type TestContext = {
  account: Account;
};

const TOKEN_ERROR_MESSAGE = "Token not received during user registration";

interface RegistrationResult {
  userData: User;
  token: string;
}

async function registerUser(
  request: APIRequestContext
): Promise<RegistrationResult> {
  const authController = new AuthController(request);
  const userData: User = generateRandomUser();
  const response = await authController.register(userData);
  const responseData: { token: string } = await response.json();

  if (!responseData.token) {
    throw new Error(
      `${TOKEN_ERROR_MESSAGE}. Response: ${JSON.stringify(responseData)}`
    );
  }

  return {
    token: responseData.token,
    userData,
  };
}

const registerAndRetrieveAuthToken = test.extend<TestContext>({
  account: async ({ request }, use) => {
    const { token, userData } = await registerUser(request);
    await use({ token, userData });
  },
});

export { registerAndRetrieveAuthToken };
