import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class LocationHistoryQueueService {
  constructor(@InjectQueue('location-history') private readonly queue: Queue) {}

  async addToQueue(data: any): Promise<void> {
    await this.queue.add(data);
  }
}
