import { APIRequestContext, APIResponse } from "@playwright/test";

interface RequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: object;
  headers?: Record<string, string>;
  token?: string;
  queryParams?: Record<string, string | number>;
}

export class ApiHelpers {
  static async sendRequest(
    request: APIRequestContext,
    options: RequestOptions
  ): Promise<APIResponse> {
    try {
      const urlWithParams = this.buildUrlWithQueryParams(
        options.url,
        options.queryParams
      );

      const headers = {
        ...options.headers,
        ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
      };

      const response = await request.fetch(urlWithParams, {
        method: options.method,
        headers,
        data: options.data,
      });

      this.handleResponse(response);
      return response;
    } catch (error) {
      console.error(
        `${options.method} request to ${options.url} failed:`,
        error
      );
      throw error;
    }
  }

  static async sendGetRequest(
    request: APIRequestContext,
    url: string,
    options: {
      headers?: Record<string, string>;
      token?: string;
      queryParams?: Record<string, string | number>;
    } = {}
  ): Promise<APIResponse> {
    return this.sendRequest(request, { method: "GET", url, ...options });
  }

  static async sendPostRequest(
    request: APIRequestContext,
    url: string,
    data: object,
    options: { headers?: Record<string, string>; token?: string } = {}
  ): Promise<APIResponse> {
    return this.sendRequest(request, { method: "POST", url, data, ...options });
  }

  private static handleResponse(response: APIResponse): void {
    if (!response.ok()) {
      throw new Error(`Request failed with status ${response.status()}`);
    }
  }

  private static buildUrlWithQueryParams(
    url: string,
    queryParams?: Record<string, string | number>
  ): string {
    if (!queryParams) return url;

    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });

    return `${url}?${searchParams.toString()}`;
  }
}