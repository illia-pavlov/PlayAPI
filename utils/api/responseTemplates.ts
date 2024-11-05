import { LoginResponse, UserCreatedResponse } from "../../api/models";

export const loginResponseTemplate: Partial<LoginResponse> = {
  success: true,
  token: "",
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  },
};

export const userCreatedResponseTemplate: Partial<UserCreatedResponse> = {
  success: true,
  subscribed: false,
  token: "",
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  },
};
