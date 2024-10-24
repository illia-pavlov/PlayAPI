import { APIRequestContext } from "@playwright/test";
import { ApiHelpers } from "../../utils/apiHelpers";

export class UsersController {
  private request: APIRequestContext;
  private static readonly usersUrl = "/api/users";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getUsers(page?: number) {
    const url = `${UsersController.usersUrl}${page ? `?page=${page}` : ""}`;
    const response = await ApiHelpers.sendGetRequest(this.request, url);
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
