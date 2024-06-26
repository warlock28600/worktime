import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {PersonEntity} from "./person.entity";
import {UnitEntity} from "./unit.entity";

@Entity()
export class PersonInUnitEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => PersonEntity, person => person.personInUnit)
    @JoinColumn({name: 'personId'})
    person: PersonEntity

    @Column()
    personId: number

    @ManyToOne(() => UnitEntity, unit => unit.personInUnit)
    @JoinColumn({name: 'unitId'})
    unit: UnitEntity

    @Column()
    unitId: number


}