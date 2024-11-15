export class EnvConfig {
  static getVariable(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment variable ${key} must be defined`);
    }
    return value;
  }

  static getFullUrl(path: string): string {
    const baseUrl = this.getVariable("API_BASE_URL");
    return `${baseUrl}${path}`;
  }
}
