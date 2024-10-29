import { APIRequestContext } from "@playwright/test";
import { ApiHelpers } from "../../utils/api/apiHelpers";

export class UserController {
  private request: APIRequestContext;
  private static readonly userUrl = "/api/user";

  private static readonly endpoints = {
    me: `${UserController.userUrl}/me`,
  };

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getUser(token: string) {
    const response = await ApiHelpers.sendGetRequest(
      this.request,
      UserController.endpoints.me,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return response;
  }

  async updateUser() {
    const response = await ApiHelpers.sendPutRequest(
      this.request,
      UserController.userUrl,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  }

  // async getUsers(page?: number) {
  //   const response = await ApiHelpers.sendGetRequest(
  //     this.request,
  //     UsersController.usersUrl,
  //     {
  //       headers: { "Content-Type": "application/json" },
  //       queryParams: page ? { page } : undefined,
  //     }
  //   );
  //   return response;
  // }

  // async createUser(userData: { name: string; job: string }) {
  //   const response = await ApiHelpers.sendPostRequest(
  //     this.request,
  //     UsersController.usersUrl,
  //     userData,
  //     { headers: { "Content-Type": "application/json" } }
  //   );

  //   return response;
  // }
}
