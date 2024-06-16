import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GenderEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  title:string
}