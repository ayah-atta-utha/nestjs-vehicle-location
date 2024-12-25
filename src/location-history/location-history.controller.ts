import { Controller, Post, Body } from '@nestjs/common';
import { LocationHistoryQueueService } from './location-history.queue.service';

@Controller('location-history')
export class LocationHistoryController {
  constructor(
    private readonly locationHistoryQueueService: LocationHistoryQueueService,
  ) {}

  @Post()
  async addLocation(@Body() body: any) {
    const { vehicleId, location, speed, direction, timestamp } = body;

    // Add to queue for processing
    await this.locationHistoryQueueService.addToQueue({
      vehicleId,
      location,
      speed,
      direction,
      timestamp,
    });

    return { message: 'Location added to queue' };
  }
}
