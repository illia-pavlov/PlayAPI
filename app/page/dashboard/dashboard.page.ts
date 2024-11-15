import { expect } from "playwright/test";
import { AppPage } from "../../abstractClasses";
import { step } from "../../../misc/reporters/step";

export class Dashboard extends AppPage {
  public pagePath = "/dashboard";

  private title = this.page.getByRole("heading", { name: "Account Details" });
  private firstNameInput = this.page.getByRole("textbox", {
    name: "Please Enter Your First Name",
  });
  private lastNameInput = this.page.getByRole("textbox", {
    name: "Please Enter Your Last Name",
  });
  private phoneNumberInput = this.page.getByRole("textbox", {
    name: "Please Enter Your Phone Number",
  });
  private saveButton = this.page.getByRole("button", { name: "Save Changes" });
  private successMessage = this.page.getByRole("heading", {
    name: "Your profile is successfully updated!",
  });

  private resetPasswordButton = this.page.getByRole("button", {
    name: "Reset Password",
  });

  @step()
  async expectLoaded() {
    await expect(this.title).toBeVisible();
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.phoneNumberInput).toBeVisible();
  }

  @step()
  async edit(user: { email: string; password: string; phone: string }) {
    await this.firstNameInput.fill(user.email);
    await this.lastNameInput.fill(user.password);
    await this.phoneNumberInput.fill(user.phone);
    await this.saveButton.click();
    await expect(this.successMessage).toBeVisible();
  }

  @step()
  async openSecuritySection() {
    await this.page.goto(`${this.pagePath}/security`, {
      waitUntil: "domcontentloaded",
    });
    await expect(this.resetPasswordButton).toBeVisible();
  }
}
