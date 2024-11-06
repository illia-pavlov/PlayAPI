import type { APIRequestContext } from "@playwright/test";

export abstract class APIRequestHolder {
  constructor(protected request: APIRequestContext) {}
}
