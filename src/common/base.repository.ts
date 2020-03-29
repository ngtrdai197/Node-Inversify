import { injectable } from "inversify";
import { Document, Model } from "mongoose";

@injectable()
export abstract class BaseRepository<T extends Document> {
  constructor(protected readonly model: Model<T, {}>) {}

  async find(conditions: { [key: string]: any }): Promise<T[]> {
    conditions = conditions ?? {};
    return this.model.find();
  }

  async findOne(conditions: { [key: string]: any }): Promise<T> {
    return this.model.findOne()
  }
}
