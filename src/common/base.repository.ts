import { injectable } from "inversify";
import { Document, Model } from "mongoose";

import { handleError } from "./handle-error";
import { ErrorCode } from "./error-code.enum";

@injectable()
export abstract class BaseRepository<T extends Document> {
  NOT_FOUND_ERROR = "Record does not exist";
  protected model: Model<T, {}>;
  constructor() {}

  async find(conditions: { [key: string]: any }): Promise<T[]> {
    conditions = conditions ?? {};
    return this.model.find();
  }

  async findOne(conditions: { [key: string]: any }): Promise<T | null> {
    return this.model.findOne();
  }

  async findById(id: string): Promise<T> {
    const result = await this.model.findById(id);
    if (!result) throw handleError(this.NOT_FOUND_ERROR, ErrorCode.BAD_REQUEST);
    return result;
  }
}
