import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";
import { EnvConfig } from "../../../../utils/EnvConfig";
import { step } from "../../../../misc/reporters/step";

export class SecurityPanel extends Component {
  public pagePath = "dashboard/security";
  private title = this.page.getByRole("heading", { name: "Account Security" });
  private oldPasswordInput = this.page.getByRole("textbox", {
    name: "Old Password",
  });
  private confirmPasswordInput = this.page.getByRole("textbox", {
    name: "Confirm Password",
  });
  private resetPasswordButton = this.page.getByRole("button", {
    name: "Reset Password",
  });

  @step()
  async expectLoaded(
    message = "Expected Security Panel to be loaded"
  ): Promise<void> {
    await expect(this.title).toBeVisible();
    await expect(this.oldPasswordInput).toBeVisible();
    await expect(this.confirmPasswordInput).toBeVisible();
    await expect(this.resetPasswordButton).toBeVisible();
  }

  @step()
  async openSecurity() {
    await this.page.goto(this.pagePath);
  }

  @step()
  async resetPassword(data: { oldPassword: string; newPassword: string }) {
    await this.oldPasswordInput.fill(data.oldPassword);
    await this.confirmPasswordInput.fill(data.newPassword);
    await this.resetPasswordButton.click();
    let url = EnvConfig.getFullUrl("api/auth/reset");
    this.page.waitForResponse(
      (response) => response.url() === url && response.status() === 200
    );
  }
}
