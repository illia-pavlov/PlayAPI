import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";
import { EnvConfig } from "../../../../utils/EnvConfig";

export class AddBrandPage extends Component {
  public pagePath = "dashboard/brand/add";
  private title = this.page.getByRole("heading", { name: "Add Brand" });
  private brandNameInput = this.page.getByRole("textbox", {
    name: "Brand Name",
  });
  private brandDescriptionInput = this.page.getByRole("textbox", {
    name: "Brand Description",
  });
  private addBrandButton = this.page.getByRole("button", {
    name: "Add Brand",
  });

  @step()
  async expectLoaded(
    message = "Expected Brand Panel to be loaded"
  ): Promise<void> {
    await expect(this.title).toBeVisible();
    await expect(this.brandNameInput).toBeVisible();
    await expect(this.brandDescriptionInput).toBeVisible();
    await expect(this.addBrandButton).toBeVisible();
  }

  @step()
  async openAddBrandPage() {
    await this.page.goto(this.pagePath);
    await this.expectLoaded();
  }

  @step()
  async addBrand(data: { name: string; description: string }) {
    await this.brandNameInput.fill(data.name);
    await this.brandDescriptionInput.fill(data.description);
    await this.addBrandButton.click();
    let url = EnvConfig.getFullUrl("api/brand/add");
    this.page.waitForResponse(
      (response) => response.url() === url && response.status() === 200
    );
  }
}
