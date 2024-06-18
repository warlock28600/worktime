import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PersonEntity } from './person.entity';
import { IsNumber } from 'class-validator';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNumber()
  expireDate: number;

  @Column()
  passWord: string;

  @OneToOne(() => PersonEntity)
  @JoinColumn({ name: 'personId' })
  person: PersonEntity;

}