import { Resolver, Query } from '@nestjs/graphql';
import { Author } from './graphql-demo.dto';
import { Product } from 'src/products/schema/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Resolver(() => Author)
export class GraphqlDemoResolver {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  @Query(() => Author)
  async author() {
    return { id: 5, firstName: 'John', lastName: 'Doe' };
  }

  @Query(() => [Product], { name: 'findProduct' })
  async findProduct(): Promise<Product[]> {
    return await this.productModel.find();
  }
}
