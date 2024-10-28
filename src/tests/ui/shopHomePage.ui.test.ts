import { test } from "@playwright/test";
import { ShopHomePage } from "../../pages/ShopHomePage";
import { shopHomePageData } from "../../data/testData";
import { verifyPageTitle } from "../../../utils/ui/pageHelpers";

test.describe("Shop Home Page Tests", () => {
  test("Able to open home page", async ({ page }) => {
    const shopHomePage = new ShopHomePage(page);

    await shopHomePage.goto();
    await verifyPageTitle(page, shopHomePageData.expectedTitle);
  });
});
