import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {PersonEntity} from './person.entity';

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
}