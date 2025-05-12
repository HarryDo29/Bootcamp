import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShipperEntity } from 'src/shippers/entity/shipper.entity';
import { Repository, UpdateResult } from 'typeorm';
import { shipperRequest } from './shipper.dto';

@Injectable()
export class ShipperService {
  constructor(
    @InjectRepository(ShipperEntity)
    private readonly shipperRepository: Repository<ShipperEntity>,
  ) {}

  async createShipper(@Body() request: shipperRequest): Promise<ShipperEntity> {
    return await this.shipperRepository.save(request);
  }

  async findShipperById(id: number): Promise<ShipperEntity | null> {
    return await this.shipperRepository.findOne({ where: { shipper_id: id } });
  }

  async setWorkingShipper(id: number): Promise<UpdateResult | null> {
    const shipper = await this.findShipperById(id);
    if (!shipper) {
      return null;
    }
    return await this.shipperRepository.update(id, { isWorking: true });
  }

  async setNotWorkingShipper(id: number): Promise<UpdateResult | null> {
    const shipper = await this.findShipperById(id);
    if (!shipper) {
      return null;
    }
    return await this.shipperRepository.update(id, { isWorking: false });
  }

  async updateShipper(
    id: number,
    request: {
      shipperName?: string;
      shipperPhoneNumber?: string;
    },
  ): Promise<UpdateResult | null> {
    const shipper = await this.findShipperById(id);
    if (!shipper) {
      return null;
    }
    return await this.shipperRepository.update(id, request);
  }
}
