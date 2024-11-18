// import { Collection, Db, ObjectId } from "mongodb";
import { Brand } from "../entities/Brand";
import { DatabaseManager } from "../DatabaseManager";

export class BrandService {
  constructor(private db: DatabaseManager) {}

  async getAllBrands(): Promise<Brand[]> {
    const collection = this.db.getCollection<any>("brands");
    return collection.find().toArray();
  }
}
