import { expect } from "playwright/test";
import { AppPage } from "../abstractClasses";
import { step } from "../../misc/reporters/step";

export class Login extends AppPage {
  public pagePath = "/login";

  private signInButton = this.page.getByRole("button", { name: "Login" });
  private emailInput = this.page
    .getByRole("main")
    .getByPlaceholder("Please Enter Your Email");
  private passwordInput = this.page.getByPlaceholder(
    "Please Enter Your Password"
  );
  private emailErrorText = this.page.getByText("Email is required.");
  private passwordErrorText = this.page.getByText("Password is required.");

  @step()
  async expectLoaded() {
    await expect(this.signInButton).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }

  @step()
  async login(user: { email: string; password: string }) {
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.signInButton.click();
  }

  @step()
  async expectErrors() {
    await expect(this.emailErrorText).toBeVisible();
    await expect(this.passwordErrorText).toBeVisible();
  }
}
