import { faker } from "@faker-js/faker";
import { User } from "./types/types";

export function generateRandomUser(isSubscribed: boolean = false): User {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isSubscribed,
  };
}
