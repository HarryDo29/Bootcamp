import { Injectable } from '@nestjs/common';
import { MathService } from './math/math.service';
import { Repository } from 'typeorm';
// import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schema/cat.schema';
import { Model } from 'mongoose';
import { CustomerEntity } from './entities/customer.entity';
import { OrderEntity } from './entities/order.entity';
import { ShipperEntity } from './entities/shipper.entity';
@Injectable()
export class AppService {
  constructor() // @InjectRepository(UserEntity) // inject user repository // private readonly mathService: MathService, // inject math service vao cai service nay
  // private readonly userRepository: Repository<UserEntity>,
  //inject cai model vao
  // @InjectModel(Cat.name) private catModel: Model<Cat>,
  {}

  // async getHello(): Promise<UserEntity> {
  //   return await this.userRepository.save({
  //     firstName: 'Quynh1',
  //     lastName: 'Nhu',
  //     isActive: true,
  //   });
  // }

  // async createCat(): Promise<Cat> {
  //   return await this.catModel.create({
  //     name: 'Cat',
  //     age: 1,
  //     breed: 'Persian',
  //   });
  // }

  // async getHello(): Promise<UserEntity> {
  //   return await this.userRepository.save({
  //     firstName: 'Quynh1',
  //     lastName: 'Nhu',
  //     isActive: true,
  //   });
  // }
}
