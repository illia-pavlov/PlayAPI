import {
  loginResponseTemplate,
  userCreatedResponseTemplate,
} from "../../utils/api/responseTemplates";
import {
  LoginResponse,
  UserCreatedResponse,
  UserCreateRequest,
} from "../models";
import { RequestHolder } from "../requestHolder";

export class AuthController extends RequestHolder {
  async login(data: {
    email: string;
    password: string;
  }): Promise<LoginResponse> {
    const loginResponse = await this.request.post("/api/auth/login", {
      data,
    });

    await this.expectStatusCode(loginResponse, 200);
    await this.expectResponseObject(loginResponse, loginResponseTemplate);

    return loginResponse.json() as Promise<LoginResponse>;
  }

  async createNewUser(data: UserCreateRequest): Promise<UserCreatedResponse> {
    const userCreatedResponse = await this.request.post("/api/auth/register", {
      data,
    });

    await this.expectStatusCode(userCreatedResponse, 200);
    await this.expectResponseObject(
      userCreatedResponse,
      userCreatedResponseTemplate
    );

    return userCreatedResponse.json() as Promise<UserCreatedResponse>;
  }
}
