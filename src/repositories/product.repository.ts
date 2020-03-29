import { injectable } from "inversify";

import { productModel } from "../models/product.model";
import { BaseRepository } from "../common/base.repository";
import { IProduct } from "../interfaces/product.interface";

@injectable()
export class ProductRepository extends BaseRepository<IProduct> {
  constructor() {
    super(productModel)
  }

  async create(): Promise<IProduct> {
   return productModel.create({ name: "Mentos", price: 28000 });
  }
}
