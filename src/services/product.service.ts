import { injectable, inject } from "inversify";

import { REPOSITORY_TYPES } from "../common/container-types";
import { ProductRepository } from "../repositories";
import { IProduct } from "../interfaces/product.interface";
import { ErrorCode } from "../common/error-code.enum";
import { handleError } from "../common/handle-error";

@injectable()
export class ProductService {
  constructor(
    @inject(REPOSITORY_TYPES.ProductRepository)
    private readonly productRepository: ProductRepository
  ) {}

  async createProduct(): Promise<IProduct> {
    try {
      const exist = await this.productRepository.findOne({});
      if (exist)
        throw handleError("Record already exist", ErrorCode.BAD_REQUEST);
      return this.productRepository.create();
    } catch (error) {
      console.log('error', error)
      throw handleError("", ErrorCode.SERVER_INTERNAL);
    }
  }
}
