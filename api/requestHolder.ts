import { APIRequestContext, APIResponse } from "@playwright/test";

export abstract class RequestHolder {
  constructor(protected request: APIRequestContext) {}

  protected async expectStatusCode(
    response: APIResponse,
    expectedStatus: number
  ): Promise<void> {
    if (response.status() !== expectedStatus) {
      const status = response.status();
      const statusText = response.statusText();
      const responseBody = await response.text();
      throw new Error(
        `Expected status ${expectedStatus} but received ${status} (${statusText}): ${responseBody}`
      );
    }
  }
  protected async expectResponseObject<T>(
    response: APIResponse,
    referenceObject: Partial<T>
  ): Promise<void> {
    const responseData = await response.json();

    const responseKeys = Object.keys(responseData);
    const referenceKeys = Object.keys(referenceObject);

    const missingKeys = referenceKeys.filter(
      (key) => !responseKeys.includes(key)
    );
    const extraKeys = responseKeys.filter(
      (key) => !referenceKeys.includes(key)
    );

    if (missingKeys.length > 0) {
      throw new Error(
        `Response is missing expected keys: ${missingKeys.join(", ")}`
      );
    }

    if (extraKeys.length > 0) {
      throw new Error(
        `Response has unexpected extra keys: ${extraKeys.join(", ")}`
      );
    }
  }
}
