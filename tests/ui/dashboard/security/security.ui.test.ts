import { loggedUser } from "../../../../fixtures";

loggedUser.describe("Reset Password", () => {
  loggedUser("Should be able to reset password", async ({ app }) => {
    const password = process.env.ADMIN_PASSWORD;

    if (!password) {
      throw new Error(
        "Environment variables ADMIN_EMAIL and ADMIN_PASSWORD must be defined"
      );
    }

    await app.securityPanel.openSecurity();
    await app.securityPanel.resetPassword({
      newPassword: password,
      oldPassword: password,
    });
    await app.login.expectLoaded();
  });
});
