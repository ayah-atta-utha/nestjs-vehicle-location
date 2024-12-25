import {
    Entity, 
    ManyToOne,
    JoinColumn,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn, 
  } from 'typeorm';
  import { Vehicle } from '../vehicle/vehicle.entity';  
  
  @Entity('location_history')
  export class LocationHistory {
    @PrimaryGeneratedColumn({name:'location_id'})
    locationId!: string;
  
    @ManyToOne(() => Vehicle, (vehicle) => vehicle.locationHistory, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'vehicle_id' })
    vehicle!: Vehicle;
  
    @Column('point', { nullable: true })
    location!: string;  
     
  
    @Column('float', { precision: 10, scale: 6, default: 0 })
    speed!: number;
  
    @Column('float', { precision: 10, scale: 6 })
    direction!: number;
  
    @CreateDateColumn({ type: 'datetime', nullable: true })
    timestamp!: Date;
     }
  