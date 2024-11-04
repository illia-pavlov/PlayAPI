import { APIResponse, expect } from "@playwright/test";

const isSuccessStatus = (status: number): boolean =>
  status >= 200 && status < 300;

export const assertStatusCode = (
  response: APIResponse,
  expectedStatusCode: number
): void => {
  if (!response) {
    throw new Error("Response object is required for verifying status code");
  }

  const statusCode = response.status();
  expect(statusCode).toBe(expectedStatusCode);
  expect(isSuccessStatus(statusCode)).toBe(true);
};

export function assertProperties(
  actual: Record<string, any>,
  expected: Record<string, any>
): void {
  const commonKeys = Object.keys(expected).filter((key) => key in actual);

  for (const key of commonKeys) {
    expect(actual[key]).toBe(expected[key]);
  }
}
