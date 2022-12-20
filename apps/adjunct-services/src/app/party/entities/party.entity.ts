import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Party {

  @PrimaryGeneratedColumn('increment')
  id: number
  @Column()
  firstName: string
  @Column()
  lastName: string
  @Column()
  connectedCases: string

}
