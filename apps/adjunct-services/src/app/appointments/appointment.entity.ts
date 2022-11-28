import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  caseworkerId: number;
  @Column()
  timeslot: Date;
  @Column()
  booked: boolean;
}
