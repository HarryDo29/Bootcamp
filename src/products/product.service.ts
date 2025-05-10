import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { Product } from 'src/products/schema/product.schema';
import { productRequest } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    //   inject cai model vao
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createProduct(@Body() request: productRequest): Promise<Product> {
    return await this.productModel.create(request);
  }

  async findAllProduct(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async findProductByName(name: string): Promise<Product[] | null> {
    return await this.productModel.find({ name: name });
  }

  async updateProduct(
    productId: string,
    request: {
      name?: string;
      price?: number;
      description?: string;
      category?: string;
    },
  ): Promise<UpdateWriteOpResult | null> {
    const product = await this.productModel.findOne({
      productId: productId,
    });
    if (!product) {
      return null;
    }
    return await this.productModel.updateOne({ productId: productId }, request);
  }
}
