import { API } from "../api/api";
import { Login } from "./page/login.page";
import { PageHolder } from "./abstractClasses";
import { Header } from "./component/header.component";
import { Home } from "./page/home.page";
import { Dashboard } from "./page/dashboard.page";

export class Application extends PageHolder {
  public api = new API(this.page.request);

  public home = new Home(this.page);
  public header = new Header(this.page);
  public login = new Login(this.page);
  public dashboard = new Dashboard(this.page);

  async headlessLogin(data: { email: string; password: string }) {
    const token = (await this.api.auth.login(data)).token;
    await this.setTokenToLocalStorage(token);
  }

  async setTokenToLocalStorage(token: string) {
    await this.page.goto("/", { waitUntil: "commit" });
    await this.page.evaluate(
      (_token) => window.localStorage.setItem("token", _token),
      token
    );
  }
}
