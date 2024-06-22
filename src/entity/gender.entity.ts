import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {PersonEntity} from "./person.entity";

@Entity()
export class GenderEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  title:string

    @OneToMany(() => PersonEntity, person => person.gender)
    persons: PersonEntity[];
}