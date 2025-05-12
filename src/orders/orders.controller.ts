import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrderEntity } from 'src/orders/entity/order.entity';
import { OrderService } from 'src/orders/orders.service';
import { UpdateResult } from 'typeorm';
import { orderRequest } from './order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  createOrder(@Body() request: orderRequest): Promise<OrderEntity> {
    return this.orderService.createOrder(request);
  }

  @Get('findById/:id')
  findOrderById(@Param('id') id: string): Promise<OrderEntity | null> {
    return this.orderService.findOrderById(id);
  }

  @Put('update/:id')
  async updateOrder(
    @Param('id') id: string,
    @Body()
    request: {
      cusPhoneNumber?: string;
      address?: string;
    },
  ): Promise<UpdateResult | null> {
    const { cusPhoneNumber, address } = request;
    if (!cusPhoneNumber && !address) {
      return null;
    }
    const user = await this.orderService.findOrderById(id);
    if (user === null) {
      return null;
    }
    return this.orderService.updateOrder(id, request);
  }
}
