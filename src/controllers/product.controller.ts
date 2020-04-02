import { inject } from "inversify";
import { httpPost, controller, httpGet } from "inversify-express-utils";
import { Request } from "express";

import { SERVICE_TYPES } from "../common/container-types";
import { ProductService } from "../services";
import { IProduct } from "../interfaces/product.interface";
import { ROOT_PATHS } from '../common/constants'

@controller(ROOT_PATHS.PRODUCT)
export class ProductController {
  constructor(
    @inject(SERVICE_TYPES.ProductService)
    private readonly productService: ProductService
  ) {}

  @httpPost("/")
  public async create(req: Request): Promise<IProduct> {
    return this.productService.createProduct();
  }

  @httpGet("/:id")
  public async getProductById(req: Request) {
    const { id } = req.params;
    return this.productService.getProductById(id);
  }
}
