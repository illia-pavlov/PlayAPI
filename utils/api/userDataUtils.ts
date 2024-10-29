import { faker } from "@faker-js/faker";
import { User } from "../../src/types/types";

export function generateRandomUser() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isSubscribed: false,
  };
}

export function createUserObject(responseData: {
  user: User;
  subscribed: boolean;
}) {
  return {
    firstName: responseData.user.firstName,
    lastName: responseData.user.lastName,
    email: responseData.user.email,
    isSubscribed: responseData.subscribed,
  };
}
