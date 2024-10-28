import { test, expect } from "@playwright/test";
import { ShopHomePage } from "../../pages/ShopHomePage";
import { LoginPage } from "../../pages/LoginPage";

test.describe("Login Page Tests", () => {
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

    const emailError = await loginPage.getEmailErrorText();
    const passwordError = await loginPage.getPasswordErrorText();

    expect(emailError).toContain("Email is required.");
    expect(passwordError).toContain("Password is required.");
  });
});
