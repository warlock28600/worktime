import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GenderEntity } from './gender.entity';
import { UsersEntity } from './users.entity';
import { UnitEntity } from './unit.entity';
import { PersonInUnitEntity } from './person-in-unit.entity';
import { AttendanceEntity } from './attendance.entity';

@Entity()
export class PersonEntity{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column()
    email:string

    @Column()
    nationalCode:string

    @Column()
    address:string

    @Column()
    mobile:string

    @Column()
    idno:string

    @Column()
    fatherName:string

    @Column({default:false})
    Approved:boolean

    @ManyToOne(() => GenderEntity, gender => gender.persons)
    @JoinColumn({name:'genderId'})
    gender:GenderEntity
    
    @Column()
    genderId:Number

    @OneToOne(() => UsersEntity, user => user.person)
    user: UsersEntity;

    @OneToOne(() => UnitEntity, unit => unit.person)
    unit: UnitEntity;

    @OneToOne(() => PersonInUnitEntity, personInUnit => personInUnit.person)
    personInUnit: PersonInUnitEntity

    @OneToMany(() => AttendanceEntity, attendance => attendance.person)
    attendance: AttendanceEntity;


}