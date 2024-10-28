import { Page } from "@playwright/test";

export class ShopHomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/");
  }
}
