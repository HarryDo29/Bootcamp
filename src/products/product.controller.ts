import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateWriteOpResult } from 'mongoose';
import { Product } from 'src/products/schema/product.schema';
import { productRequest, ProductService } from 'src/products/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  createProduct(@Body() request: productRequest): Promise<Product> {
    return this.productService.createProduct(request);
  }

  @Get('findAll')
  findAllProduct(): Promise<Product[]> {
    return this.productService.findAllProduct();
  }

  @Get('findByName/:name')
  findProductByName(@Param('name') name: string): Promise<Product[] | null> {
    return this.productService.findProductByName(name);
  }

  @Put('update/:productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body()
    request: {
      name?: string;
      price?: number;
      description?: string;
      category?: string;
    },
  ): Promise<UpdateWriteOpResult | null> {
    return this.productService.updateProduct(productId, request);
  }
}
