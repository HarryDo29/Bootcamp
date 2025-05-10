import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/customers/entity/customer.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly cusRepository: Repository<CustomerEntity>,
  ) {}

  async createCustomer(
    @Body() request: customerRequest,
  ): Promise<CustomerEntity> {
    return await this.cusRepository.save(request);
  }

  async findAllCustomer(): Promise<CustomerEntity[]> {
    return await this.cusRepository.find();
  }

  async findCustomerById(id: number): Promise<CustomerEntity | null> {
    return await this.cusRepository.findOne({ where: { id } });
  }

  async updateCustomer(
    id: number,
    request: {
      firstName?: string;
      lastName?: string;
      isActive?: boolean;
      phoneNumber?: string;
      address?: string;
    },
  ): Promise<UpdateResult | null> {
    const customer = await this.findCustomerById(id);
    if (!customer) {
      return null;
    }
    return await this.cusRepository.update(id, request);
  }
}

export interface customerRequest {
  firstName: string;
  lastName: string;
  isActive?: boolean;
  phoneNumber: string;
  address: string;
}
