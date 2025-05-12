import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerEntity } from 'src/customers/entity/customer.entity';
import { CustomerService } from 'src/customers/customers.service';
import { UpdateResult } from 'typeorm';
import { CustomerRequest, CustomerUpdateRequest } from './customer.dto';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { TransformInterceptor } from '../interceptors/transform.interceptor';

@Controller('customers')
@UseInterceptors(LoggingInterceptor)
@UseInterceptors(TransformInterceptor)
export class CustomerController {
  constructor(private readonly cusService: CustomerService) {}

  @Post('create')
  async createCustomer(
    @Body(new ValidationPipe()) request: CustomerRequest,
  ): Promise<CustomerEntity> {
    return this.cusService.createCustomer(request);
  }

  @Get('findAll')
  findAllCustomer(): Promise<CustomerEntity[]> {
    return this.cusService.findAllCustomer();
  }

  @Get('findById/:id')
  findCustomerById(@Param('id') id: string): Promise<CustomerEntity | null> {
    return this.cusService.findCustomerById(id);
  }

  @Put('update/:id')
  updateCustomer(
    @Param('id') id: string,
    @Body(new ValidationPipe()) request: CustomerUpdateRequest,
  ): Promise<UpdateResult | null> {
    return this.cusService.updateCustomer(id, request);
  }
}
