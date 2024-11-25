// import { Collection, Db, ObjectId } from "mongodb";
import { Brand } from "../entities/Brand";
import { DatabaseManager } from "../DatabaseManager";
import { expect } from "playwright/test";
import { step } from "../../misc/reporters/step";

export class BrandService {
  constructor(private db: DatabaseManager) {}

  async getAllBrands(): Promise<Brand[]> {
    const collection = this.db.getCollection<any>("brands");
    return collection.find().toArray();
  }

  async getDocumentByBrandName(name: string): Promise<Brand[]> {
    const collection = this.db.getCollection<any>("brands");
    const result = await collection.find({ name: name }).toArray();
    expect(result).not.toBeNull();
    return result;
  }
}
