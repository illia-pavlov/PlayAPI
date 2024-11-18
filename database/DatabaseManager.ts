import { Collection, Db, MongoClient } from "mongodb";
import { BrandService } from "./repositories/BrandDAO";

export class DatabaseManager {
    private client: MongoClient;
    private db: Db;
    public brandService: BrandService;
    // public userService: UsersService;
  
    private constructor(client: MongoClient, db: Db) {
      this.client = client;
      this.db = db;
      this.brandService = new BrandService(this);
    //   this.userService = new UsersService(this);
    }
  
    // Static factory method to initialize the database connection
    static async create(uri: string, dbName: string): Promise<DatabaseManager> {
      const client = new MongoClient(uri);
      await client.connect();
      const db = client.db(dbName);
  
      return new DatabaseManager(client, db);
    }
  
    // Get a collection
    getCollection<T extends Document>(collectionName: string): Collection<T> {
      return this.db.collection<T>(collectionName);
    }
  
    // Close the database connection
    async close(): Promise<void> {
      await this.client.close();
    }
  }