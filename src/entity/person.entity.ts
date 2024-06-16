import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

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

}