import { inject } from "inversify";
import { httpPost, controller } from "inversify-express-utils";
import { Request } from "express";

import { SERVICE_TYPES } from "../common/container-types";
import { ProductService } from "../services";
import { IProduct } from "../interfaces/product.interface";

@controller("/product")
export class ProductController {
  constructor(
    @inject(SERVICE_TYPES.ProductService)
    private readonly productService: ProductService
  ) {}

  @httpPost("/")
  async create(req: Request): Promise<IProduct> {
    console.log("body", req.body);
    return this.productService.createProduct();
  }
}
