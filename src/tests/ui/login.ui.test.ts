import { test, expect } from "@playwright/test";
import { ShopHomePage } from "../../pages/ShopHomePage";
import { LoginPage } from "../../pages/LoginPage";

test("Should not be able to login with blank email and password", async ({
  page,
}) => {
  const shopHomePage = new ShopHomePage(page);
  const loginPage = new LoginPage(page);

  await shopHomePage.goto();
  await shopHomePage.clickWelcomeButton();
  expect(
    await page.getByRole("menuitem", { name: "Login" }).isVisible()
  ).toBeTruthy();
  await shopHomePage.clickLoginButton();
  expect(page.url()).toContain("/login");
  await loginPage.clickLoginButton();

  expect(await loginPage.getEmailErrorText()).toContain("Email is required.");
  expect(await loginPage.getPasswordErrorText()).toContain("Password is required.");  
});
