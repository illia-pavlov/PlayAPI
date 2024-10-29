import { APIRequestContext } from "@playwright/test";
import { ApiHelpers } from "../../utils/api/apiHelpers";

export class AuthController {
  private request: APIRequestContext;
  private static readonly authUrl = "/api/auth/register";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async register(userRegisterData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isSubscribed: boolean;
  }) {
    const response = await ApiHelpers.sendPostRequest(
      this.request,
      AuthController.authUrl,
      userRegisterData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  }
}
