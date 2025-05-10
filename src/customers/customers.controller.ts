import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerEntity } from 'src/customers/entity/customer.entity';
import { CustomerService } from 'src/customers/customers.service';
import { UpdateResult } from 'typeorm';
import { customerRequest } from './customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly cusService: CustomerService) {}

  @Post('create')
  createCustomer(@Body() request: customerRequest): Promise<CustomerEntity> {
    return this.cusService.createCustomer(request);
  }

  @Get('findAll')
  findAllCustomer(): Promise<CustomerEntity[]> {
    return this.cusService.findAllCustomer();
  }

  @Get('findById/:id')
  findCustomerById(@Param('id') id: number): Promise<CustomerEntity | null> {
    return this.cusService.findCustomerById(id);
  }

  @Put('update/:id')
  updateCustomer(
    @Param('id') id: number,
    @Body()
    request: {
      firstName?: string;
      lastName?: string;
      isActive?: boolean;
      phoneNumber?: string;
      address?: string;
    },
  ): Promise<UpdateResult | null> {
    return this.cusService.updateCustomer(id, request);
  }
}
