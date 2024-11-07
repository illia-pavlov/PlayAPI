import { expect } from "playwright/test";
import { AppPage } from "../abstractClasses";
import { Header } from "../component/header.component";
import { step } from "../../misc/reporters/step";

export class Home extends AppPage {
  public pagePath = "/";

  public header = new Header(this.page);
  private carousel = this.page.locator(".main .homepage .home-carousel");
  private title = this.page.getByRole("heading", { name: "MERN Store" });

  @step()
  async expectLoaded(message = "Expected Home to be opened") {
    await expect(this.carousel, message).toBeVisible();
    await expect(this.title, message).toContainText("MERN Store");
  }
}
