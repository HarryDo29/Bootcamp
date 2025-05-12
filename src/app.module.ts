import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerEntity } from './customers/entity/customer.entity';
import { OrderEntity } from './orders/entity/order.entity';
import { ShipperEntity } from './shippers/entity/shipper.entity';
import { CustomerController } from './customers/customers.controller';
import { CustomerService } from './customers/customers.service';
import { ShipperService } from './shippers/shippers.service';
import { OrderService } from './orders/orders.service';
import { ShipperController } from './shippers/shippers.controller';
import { OrderController } from './orders/orders.controller';
import { Product, ProductSchema } from './products/schema/product.schema';
import { Feedback, FeedbackSchema } from './feedback/schema/feedback.schema';
import { ProductService } from './products/product.service';
import { ProductController } from './products/product.controller';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // import db postgres nay vao thi moi sd duoc database
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'postgres',
      entities: [CustomerEntity, OrderEntity, ShipperEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([CustomerEntity, OrderEntity, ShipperEntity]),
    MongooseModule.forRoot(
      'mongodb://bootcamp:mysecretpassword@localhost:27019',
    ),
    // MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([
      { name: Feedback.name, schema: FeedbackSchema },
    ]),
  ],
  controllers: [
    AppController,
    CustomerController,
    OrderController,
    ShipperController,
    ProductController,
    FeedbackController,
  ],
  providers: [
    AppService,
    CustomerService,
    OrderService,
    ShipperService,
    ProductService,
    FeedbackService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
