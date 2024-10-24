import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiHelpers {
  static async sendGetRequest(request: APIRequestContext, url: string): Promise<APIResponse> {
    try {
      const response = await request.get(url);
      this.handleResponse(response);
      return response;
    } catch (error) {
      console.error(`GET request to ${url} failed:`, error);
      throw error;
    }
  }

  static async sendPostRequest(
    request: APIRequestContext,
    url: string,
    data: object
  ): Promise<APIResponse> {
    try {
      const response = await request.post(url, { data });
      this.handleResponse(response);
      return response;
    } catch (error) {
      console.error(`POST request to ${url} failed:`, error);
      throw error;
    }
  }

  private static handleResponse(response: APIResponse) {
    if (!response.ok()) {
      throw new Error(`Request failed with status ${response.status()}`);
    }
  }
}