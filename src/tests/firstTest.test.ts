import { test, expect } from "@playwright/test";

test("Get API response", async ({ request }) => {
  const response = await request.get("/api/users?page=2");
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty("page");
});
