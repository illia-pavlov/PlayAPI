import { DatabaseManager } from "./DatabaseManager";

export class Database {
  private dbManager!: DatabaseManager;

  public get brandService() {
    return this.dbManager.brandService;
  }
  static async initializeDatabase(): Promise<Database> {
    const mongoUri: string | undefined = process.env.MONGODB_URI;
    const dbName: string | undefined = process.env.MONGODB_DB;
    if (!mongoUri || !dbName) {
      throw new Error("MONGODB_URI or MONGODB_DB is not defined");
    }

    const dbManager = await DatabaseManager.create(mongoUri, dbName);
    const instance = new Database();
    instance.dbManager = dbManager; // Store the DatabaseManager instance
    return instance;
  }

  async close(): Promise<void> {
    if (this.dbManager) {
      await this.dbManager.close();
    }
  }
}
