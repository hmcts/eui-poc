import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Party {

  @PrimaryGeneratedColumn()
  id: number
  @Column()
  firstName: string
  @Column()
  lastName: string
  @Column()
  connectedCases: string

}
