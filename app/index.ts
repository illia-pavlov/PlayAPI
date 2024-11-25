import { Page } from "playwright/test";
import { API } from "../api/api";
import { Database } from "../database/Database";
import { Login } from "./page/login.page";
import { PageHolder } from "./abstractClasses";
import { Header } from "./component/header.component";
import { Home } from "./page/home.page";
import { Dashboard } from "./page/dashboard/dashboard.page";
import { DashboardMenu } from "./page/dashboard/components/menu.component";
import { SecurityPanel } from "./page/dashboard/components/security.component";
import { BrandPanel } from "./page/dashboard/components/brand.component";
import { AddBrandPage } from "./page/dashboard/components/addBrand.component";

import { step } from "../misc/reporters/step";

export class Application extends PageHolder {
  public api = new API(this.page.request);
  public db!: Database;

  public home = new Home(this.page);
  public header = new Header(this.page);
  public login = new Login(this.page);
  public dashboard = new Dashboard(this.page);
  public dashboardMenu = new DashboardMenu(this.page);
  public securityPanel = new SecurityPanel(this.page);
  public brandPanel = new BrandPanel(this.page);
  public addBrandPage = new AddBrandPage(this.page);

  constructor(protected page: Page) {
    super(page);
  }

  async dbInitialize(): Promise<void> {
    this.db = await Database.initializeDatabase();
  }

  async dbClose(): Promise<void> {
    if (this.db) {
      await this.db.close();
    }
  }

  @step()
  async headlessLogin(data: { email: string; password: string }) {
    const token = (await this.api.auth.login(data)).token;
    await this.setTokenToLocalStorage(token);
  }

  @step()
  async setTokenToLocalStorage(token: string) {
    await this.page.goto("/", { waitUntil: "commit" });
    await this.page.evaluate(
      (_token) => window.localStorage.setItem("token", _token),
      token
    );
  }
}
