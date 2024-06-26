import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {PersonEntity} from './person.entity';
import {PersonInUnitEntity} from "./person-in-unit.entity";

@Entity()
export class UnitEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToOne(() => PersonEntity, person => person.unit)
  @JoinColumn({ name: 'managerId' })
  person: PersonEntity;

  @Column()
  managerId: number

  @OneToMany(() => PersonInUnitEntity, personInUnit => personInUnit.unit)
  personInUnit: PersonInUnitEntity
}