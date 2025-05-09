import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entities/order.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async createOrder(@Body() request: orderRequest): Promise<OrderEntity> {
    return await this.orderRepository.save(request);
  }

  async findOrderById(id: number): Promise<OrderEntity | null> {
    return await this.orderRepository.findOne({ where: { order_id: id } });
  }

  async updateOrder(
    id: number,
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

export interface orderRequest {
  orderName: string;
  weight: string;
  isArrive: boolean;
  cusPhoneNumber: string;
  address: string;
  orderDate: Date;
}
