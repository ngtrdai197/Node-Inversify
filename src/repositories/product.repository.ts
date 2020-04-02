import { injectable } from "inversify";

import { productModel } from "../models/product.model";
import { BaseRepository } from "../common/base.repository";
import { IProduct } from '../interfaces/product.interface';

@injectable()
export class ProductRepository extends BaseRepository<IProduct> {
  NOT_FOUND_ERROR = 'Product doest not exist'
  constructor() {
    super();
    this.model = productModel;
  }

  async create(): Promise<IProduct> {
    return productModel.create({ name: "Mentos", price: 28000 });
  }
}
