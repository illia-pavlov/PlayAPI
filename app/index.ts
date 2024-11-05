import { Login } from "./page/login.page";
import { PageHolder } from "./abstractClasses";
import { Header } from "./component/header.component";
import { Home } from "./page/home.page";
import { Dashboard } from "./page/dashboard.page";

export class Application extends PageHolder {
  public home = new Home(this.page);
  public header = new Header(this.page);
  public login = new Login(this.page);
  public dashboard = new Dashboard(this.page);
}
