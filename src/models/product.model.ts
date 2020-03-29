import { Schema, model } from "mongoose";

import { IProduct } from "../interfaces/product.interface";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: Number
});

export const productModel = model<IProduct>('Product', ProductSchema, 'Product')

