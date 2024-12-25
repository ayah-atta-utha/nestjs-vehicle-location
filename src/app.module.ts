import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { LocationHistoryModule } from './location-history/location-history.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { config } from './config';
import { LocationHistory } from './location-history/location-history.entity';
import { Vehicle } from './vehicle/vehicle.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        useFactory: async () => ({
            type: 'mysql',   
            host: config.database.host,
            port: config.database.port,
            username: config.database.username,
            password: config.database.password,
            database: config.database.name,
            entities: [Vehicle, LocationHistory],  
            synchronize: true,  //production : false
            logging: true,
          }),
      }),
    BullModule.forRoot({
        redis: {
          host: config.redis.host,
          port: config.redis.port,
        },
      }),
    LocationHistoryModule,
    VehicleModule,
  ],
})
export class AppModule {}
