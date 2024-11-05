import { expect } from "playwright/test";
import { AppPage } from "../abstractClasses";

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

  async expectLoaded() {
    await expect(this.title).toBeVisible();
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.phoneNumberInput).toBeVisible();
  }
}
