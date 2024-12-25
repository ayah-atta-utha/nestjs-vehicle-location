import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() data: any) {
    return this.vehicleService.create(data);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.vehicleService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.vehicleService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vehicleService.remove(id);
  }
}
