import { APIRequestContext } from "@playwright/test";

export class UsersController {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
    console.log(`Base URL: ${process.env.API_BASE_URL}`);
  }

  async getUsers(page?: number) {
    let url = "/api/users";

    if (page) {
      url += `?page=${page}`;
    }

    try {
      const response = await this.request.get(url);

      if (!response.ok()) {
        throw new Error(
          `Failed to fetch users: ${response.status()} - ${response.statusText()}`
        );
      }

      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error fetching users: ${error.message}`);
      } else {
        console.error("Unknown error occurred");
      }

      throw error;
    }
  }
}
