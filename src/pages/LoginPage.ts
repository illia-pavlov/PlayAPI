import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;
  private loginButtonSelector;
  private emailErrorTextSelector;
  private passwordErrorTextSelector;

  constructor(page: Page) {
    this.page = page;
    this.loginButtonSelector = this.page.getByRole("button", {
      name: "Login",
    });
    this.emailErrorTextSelector = this.page.getByText("Email is required.");
    this.passwordErrorTextSelector = this.page.getByText(
      "Password is required."
    );
  }

  async clickLoginButton() {
    await this.loginButtonSelector.click();
  }

  async getEmailErrorText() {
    return this.emailErrorTextSelector.textContent();
  }

  async getPasswordErrorText() {
    return this.passwordErrorTextSelector.textContent();
  }
}
