import { APIResponse, expect } from "@playwright/test";

export const verifyStatusCode = (
  response: APIResponse,
  expectedStatusCode: number
): void => {
  if (!response) {
    throw new Error("Response object is required");
  }

  const statusCode = response.status();
  expect(statusCode).toBe(expectedStatusCode);
  expect(response.ok()).toBe(statusCode >= 200 && statusCode < 300);
};

export const verifyProperties = <T>(actual: T, expected: T) => {
  for (const key in expected) {
    expect(actual[key]).toBe(expected[key]);
  }
};
