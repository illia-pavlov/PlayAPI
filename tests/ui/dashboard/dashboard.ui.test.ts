import { loggedUser } from "../../../fixtures";
import { EnvConfig } from "../../../utils/EnvConfig";

loggedUser.describe("Account Details", () => {
  loggedUser("Able to edit profile", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboard.edit({
      email: EnvConfig.getVariable("ADMIN_EMAIL"),
      password: EnvConfig.getVariable("ADMIN_PASSWORD"),
      phone: "1234567890",
    });
  });
});

loggedUser.describe("Side bar panel Links", () => {
  loggedUser("Able to open Account Details", async ({ app }) => {
    await app.dashboard.openSecuritySection();
    await app.dashboardMenu.openDetails();
  });
  loggedUser("Able to open Security", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openSecurity();
  });
  loggedUser("Able to open Address", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openAddress();
  });
  loggedUser("Able to open Products", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openProducts();
  });
  loggedUser("Able to open Categories", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openCategories();
  });
  loggedUser("Able to open Brand", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openBrand();
  });
  loggedUser("Able to open Users", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openUsers();
  });
  loggedUser("Able to open Merchants", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openMerchants();
  });
  loggedUser("Able to open Orders", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openOrders();
  });
  loggedUser("Able to open Reviews", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openReviews();
  });
  loggedUser("Able to open Wishlist", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openWishlist();
  });
  loggedUser("Able to open Support", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openSupport();
  });
});
