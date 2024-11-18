import { ObjectId } from "mongodb";

export class Brand {
  constructor(
    public _id: ObjectId,
    public isActive: boolean,
    public merchant: string | null,
    public name: string,
    public description: string,
    public slug: string,
    public __v: number
  ) {}
}
