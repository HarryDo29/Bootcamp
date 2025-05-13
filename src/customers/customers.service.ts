import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/customers/entity/customer.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CustomerRequest, CustomerUpdateRequest } from './customer.dto';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly cusRepository: Repository<CustomerEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async createCustomer(
    @Body() request: CustomerRequest,
  ): Promise<CustomerEntity> {
    return await this.cusRepository.save(request);
  }

  async findAllCustomer(): Promise<CustomerEntity[]> {
    return await this.cusRepository.find();
  }

  async findCustomerById(id: string): Promise<CustomerEntity | null> {
    return await this.cusRepository.findOne({ where: { cus_id: id } });
  }

  async updateCustomer(
    id: string,
    request: CustomerUpdateRequest,
  ): Promise<UpdateResult | null> {
    const customer = await this.findCustomerById(id);
    if (!customer) {
      return null;
    }
    return await this.cusRepository.update(id, request);
  }

  async sign_in(request: {
    cus_id: string;
    password: string;
  }): Promise<string | null> {
    const { cus_id, password } = request;
    const customer = await this.findCustomerById(cus_id);

    if (customer && password === '1234567') {
      return await jwt.sign({ cus_id }, 'SECRET_PASSWORD', {
        expiresIn: '1H',
      });
    }
    return null;
  }
}
