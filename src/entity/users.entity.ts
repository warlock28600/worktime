import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PersonEntity } from './person.entity';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  expireDate: Date;

  @Column()
  passWord: string;

  @OneToOne(() => PersonEntity)
  @JoinColumn({ name: 'personId' })
  person: PersonEntity;

}