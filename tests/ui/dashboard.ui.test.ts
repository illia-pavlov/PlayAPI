import { loggedUser } from "../../fixtures";

loggedUser.describe("Account Details", () => {
  loggedUser("Able to edit profile", async ({ app }) => {
    await app.dashboard.open();
    await app.dashboard.edit({
      email: "test123@test.test",
      password: "test123@test.test",
      phone: "1234567890",
    });
  });
});
