import { APIRequestContext } from "@playwright/test";

export class ApiHelpers {
  static async sendGetRequest(request: APIRequestContext, endpoint: string) {
    const response = await request.get(endpoint);
    return response;
  }

  static async sendPostRequest(
    request: APIRequestContext,
    endpoint: string,
    body: object
  ) {
    const response = await request.post(endpoint, { data: body });
    return response.json();
  }
}
