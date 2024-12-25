import { Processor, Process } from "@nestjs/bull";
import { Job } from "bull";
import { DataSource } from "typeorm";
import { LocationHistory } from "./location-history.entity";

@Processor("location-history")
export class LocationHistoryProcessor {
  constructor(private readonly dataSource: DataSource) {}

  @Process()
  async handleInsertLocation(job: Job<any>) {
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();

      const { vehicleId, location, speed, direction, timestamp } = job.data;

      const query = `
      INSERT INTO location_history (location, speed, direction, timestamp, vehicle_id)
      VALUES (ST_GeomFromText(?), ?, ?, ?, ?)
    `;

      const parameters = [
        `POINT(${location.x} ${location.y})`,
        speed,
        direction,
        timestamp,
        vehicleId,
      ];

      const insertResult = await queryRunner.query(query, parameters);

      const locationHistoryId = insertResult.insertId;

      const currentTimestamp = new Date();
      await queryRunner.query(
        `
        UPDATE counters
        SET last_update = ?, last_number = ? 
        `,
        [currentTimestamp, locationHistoryId]
      );

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
