import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";
import { EnvConfig } from "../../../../utils/EnvConfig";
import { step } from "../../../../misc/reporters/step";

export class DashboardMenu extends Component {
  // Some selectors for training purposes
  private menuLocator = this.page.locator(".panel-sidebar");
  private detailsLink = this.page.locator('//a[text()="Account Details"]');
  private securityLink = this.page.locator('[href="/dashboard/security"]');
  private addressLink = this.page.locator(
    '//a[@href="/dashboard/security"]/../../..//li[3]/a'
  );
  private productsLink = this.page.getByRole("link", { name: "Products" });
  private categoriesLink = this.page.getByRole("link", { name: "Categories" });
  private brandLink = this.page.getByRole("link", {
    name: "Brand",
    exact: true,
  });
  private usersLink = this.page.getByRole("link", { name: "Users" });
  private merchantsLink = this.page.getByRole("link", { name: "Merchants" });
  private ordersLink = this.page.getByRole("link", { name: "Orders" });
  private reviewsLink = this.page.getByRole("link", { name: "Reviews" });
  private wishlistLink = this.page.getByRole("link", { name: "Wishlist" });
  private supportLink = this.page.getByRole("link", {
    name: "Support",
  });

  @step()
  async expectLoaded(message = "Expected Menu to be loaded"): Promise<void> {
    await expect(this.menuLocator).toBeVisible();
  }

  @step()
  async openDetails() {
    await this.detailsLink.click();
  }

  @step()
  async openSecurity() {
    await this.securityLink.click();
  }

  @step()
  async openAddress() {
    await this.addressLink.click();
    let url = EnvConfig.getFullUrl("api/address");
    await this.page.waitForResponse(
      (response) => response.url() === url && response.status() === 200
    );
  }

  @step()
  async openProducts() {
    await this.productsLink.click();
  }

  @step()
  async openCategories() {
    await this.categoriesLink.click();
  }

  @step()
  async openBrand() {
    await this.brandLink.click();
  }

  @step()
  async openUsers() {
    await this.usersLink.click();
  }

  @step()
  async openMerchants() {
    await this.merchantsLink.click();
  }

  @step()
  async openOrders() {
    await this.ordersLink.click();
  }

  @step()
  async openReviews() {
    await this.reviewsLink.click();
  }

  @step()
  async openWishlist() {
    await this.wishlistLink.click();
  }

  @step()
  async openSupport() {
    await this.supportLink.click();
  }
}
