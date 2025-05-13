import { Module } from '@nestjs/common';
import { GraphqlDemoResolver } from './graphql-demo.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/products/schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [GraphqlDemoResolver],
})
export class GraphqlDemoModule {}
