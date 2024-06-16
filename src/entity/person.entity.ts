import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { GenderEntity } from './gender.entity';

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

    @OneToOne(type => GenderEntity)
    @JoinColumn()
    gender:GenderEntity

}