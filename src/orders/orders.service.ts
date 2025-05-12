import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/orders/entity/order.entity';
import { Repository, UpdateResult } from 'typeorm';
import { orderRequest } from './order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async createOrder(@Body() request: orderRequest): Promise<OrderEntity> {
    return await this.orderRepository.save(request);
  }

  async findOrderById(id: string): Promise<OrderEntity | null> {
    return await this.orderRepository.findOne({ where: { order_id: id } });
  }

  async updateOrder(
    id: string,
    request: {
      cusPhoneNumber?: string;
      address?: string;
    },
  ): Promise<UpdateResult | null> {
    const order = await this.findOrderById(id);
    if (!order) {
      return null;
    }
    return await this.orderRepository.update(id, request);
  }
}
