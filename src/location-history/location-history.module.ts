import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationHistory } from './location-history.entity';
import { LocationHistoryController } from './location-history.controller';
import { LocationHistoryQueueService } from './location-history.queue.service';
import { LocationHistoryProcessor } from './location-history.processor'; 

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'location-history',
    }),
    TypeOrmModule.forFeature([LocationHistory]), 
  ],
  controllers: [LocationHistoryController],
  providers: [LocationHistoryQueueService, LocationHistoryProcessor],
})
export class LocationHistoryModule {}
