import { APIRequestContext } from "@playwright/test";
import { ApiHelpers } from "../../utils/apiHelpers";

export class UsersController {
  private request: APIRequestContext;
  private static readonly usersUrl = "/api/users";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getUsers(page?: number) {
    const response = await ApiHelpers.sendGetRequest(
      this.request,
      UsersController.usersUrl,
      {
        headers: { "Content-Type": "application/json" },
        queryParams: page ? { page } : undefined,
      }
    );
    return response;
  }

  async createUser(userData: { name: string; job: string }) {
    const response = await ApiHelpers.sendPostRequest(
      this.request,
      UsersController.usersUrl,
      userData
    );

    return response;
  }
}
