import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ShipperEntity } from 'src/shippers/entity/shipper.entity';
import { shipperRequest, ShipperService } from 'src/shippers/shippers.service';
import { UpdateResult } from 'typeorm';

@Controller('shippers')
export class ShipperController {
  constructor(private readonly shipperService: ShipperService) {}

  @Post('create')
  createShipper(@Body() request: shipperRequest): Promise<ShipperEntity> {
    return this.shipperService.createShipper(request);
  }

  @Get('findById/:id')
  findShipperById(@Param('id') id: number): Promise<ShipperEntity | null> {
    return this.shipperService.findShipperById(id);
  }

  @Put('setWorking/:id')
  setWorkingShipper(@Param('id') id: number): Promise<UpdateResult | null> {
    return this.shipperService.setWorkingShipper(id);
  }

  @Put('setNotWorking/:id')
  setNotWorkingShipper(@Param('id') id: number): Promise<UpdateResult | null> {
    return this.shipperService.setNotWorkingShipper(id);
  }

  @Put('update/:id')
  async updateShipper(
    @Param('id') id: number,
    @Body()
    request: {
      shipperName?: string;
      shipperPhoneNumber?: string;
    },
  ): Promise<UpdateResult | null> {
    const user = await this.shipperService.findShipperById(id);
    if (user === null) {
      return null;
    }
    return this.shipperService.updateShipper(id, request);
  }
}
