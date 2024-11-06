import { AuthController } from "./controller/auth.controller";
import { APIRequestHolder } from "./abstractClasses";

export class ApplicationAPI extends APIRequestHolder {
  public readonly auth = new AuthController(this.request);
}
