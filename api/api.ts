import { AuthController } from "./controller/auth.controller";
import { RequestHolder } from "./requestHolder";

export class API extends RequestHolder {
  public readonly auth = new AuthController(this.request);
}
