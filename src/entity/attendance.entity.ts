import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PersonEntity } from './person.entity';

@Entity()
export class AttendanceEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PersonEntity, person => person.attendance)
  @JoinColumn({ name: 'personId' })
  person: PersonEntity;

  @JoinColumn()
  personId: number;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updateAt: Date;
}