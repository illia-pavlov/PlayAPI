import { Page } from "@playwright/test";

export class ShopHomePage {
  private page: Page;
  private welcomeButtonSelector;
  private loginButtonSelector;

  constructor(page: Page) {
    this.page = page;
    this.welcomeButtonSelector = this.page.getByText("Welcome!", {
      exact: true,
    });
    this.loginButtonSelector = this.page.getByRole("menuitem", {
      name: "Login",
    });
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickWelcomeButton() {
    await this.welcomeButtonSelector.click();
  }

  async clickLoginButton() {
    await this.loginButtonSelector.click();
  }
}
