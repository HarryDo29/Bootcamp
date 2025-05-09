import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MathModule } from './math/math.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
// import { Cat, CatSchema } from './schema/cat.schema';
import { CustomerEntity } from './entities/customer.entity';
import { OrderEntity } from './entities/order.entity';
import { ShipperEntity } from './entities/shipper.entity';
import { CustomerController } from './controller/customers.controller';
import { CustomerService } from './service/customers.service';
import { ShipperService } from './service/shippers.service';
import { OrderService } from './service/orders.service';
import { ShipperController } from './controller/shippers.controller';
import { OrderController } from './controller/orders.controller';

@Module({
  imports: [
    // // import MathModule thi moi sai duoc math sercvice
    // MathModule,
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
  ],
  controllers: [
    AppController,
    CustomerController,
    OrderController,
    ShipperController,
  ],
  providers: [AppService, CustomerService, OrderService, ShipperService],
})
export class AppModule {}
