import { expect, Page } from "@playwright/test";

export async function verifyPageTitle(page: Page, expectedTitle: string) {
  const title = await page.title();
  expect(title).toContain(expectedTitle);
}
