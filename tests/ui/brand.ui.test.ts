import { loggedUser } from "../../fixtures";

loggedUser.describe("Brands", () => {
  loggedUser("Should be able to add brand", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboardMenu.openBrand();
    await app.brandPanel.openBrand();
    await app.brandPanel.openAddBrandPage();
    await app.addBrandPage.addBrand({
      name: "Brand 1",
      description: "Brand 1 description",
    });
    await app.brandPanel.expectBrandAddedToaster();
    await app.dbInitialize();
    await app.db.brandService.getDocumentByBrandName("Brand 1");
    await app.dbClose();
  });
});
