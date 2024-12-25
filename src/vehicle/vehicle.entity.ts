import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
  } from 'typeorm';
  import { LocationHistory } from '../location-history/location-history.entity' // Assuming this is the correct path
  
  @Entity('vehicles')
  export class Vehicle {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ type: 'enum', enum: ['car', 'truck', 'bus', 'van', 'motorcycle'], name:'type_vehicle' })
    typeVehicle!: string;
  
    @Column({ type: 'varchar', length: 22, nullable: true ,name:'code_vehicle'})
    codeVehicle!: string;
  
    @Column({ type: 'varchar', length: 10 ,name:'vehicle_number'})
    vehicleNumber!: string;
  
    @OneToMany(() => LocationHistory, (locationHistory) => locationHistory.vehicle)
    locationHistory!: LocationHistory[];
  
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' ,name:'created_at'})
    createdAt!: Date;
  
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' , name: 'updated_at' })
    updatedAt!: Date;
  }
  