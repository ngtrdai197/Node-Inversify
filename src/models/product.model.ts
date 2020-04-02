import { Schema, model } from "mongoose";

import { IProduct } from "../interfaces/product.interface";
import { PRODUCT_MODEL } from "../common/mongoose.constant";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: Number
});

export const productModel = model<IProduct>(
  PRODUCT_MODEL,
  ProductSchema,
  PRODUCT_MODEL
);

/** 
 * TODO: research and implement mongoose delete 
 * 
 * https://www.npmjs.com/package/mongoose-delete
 */
