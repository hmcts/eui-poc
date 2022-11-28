import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CaseWorker {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
}
