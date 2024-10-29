import { APIRequestContext } from "@playwright/test";
import { ApiHelpers } from "../../utils/api/apiHelpers";

export class AuthController {
  private request: APIRequestContext;
  private static readonly baseUrl = "/api/auth";

  private static readonly endpoints = {
    register: `${AuthController.baseUrl}/register`,
    login: `${AuthController.baseUrl}/login`,
  };

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
      AuthController.endpoints.register,
      userRegisterData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  }
}
