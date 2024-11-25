import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";

export class BrandPanel extends Component {
  public pagePath = "dashboard/brand";
  private title = this.page.getByRole("heading", { name: "Brands" });
  private addBrandButton = this.page.getByRole("button", {
    name: "Add",
  });
  private successMessage = this.page.getByRole("heading", {
    name: "Brand has been added successfully!",
  });

  @step()
  async expectLoaded(
    message = "Expected Brand Panel to be loaded"
  ): Promise<void> {
    await expect(this.title).toBeVisible();
    await expect(this.addBrandButton).toBeVisible();
  }

  @step()
  async openBrand() {
    await this.page.goto(this.pagePath);
  }

  @step()
  async openAddBrandPage() {
    await this.addBrandButton.click();
  }

  @step()
  async expectBrandAddedToaster() {
    await expect(this.successMessage).toBeVisible();
  }
}
