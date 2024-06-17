import { Injectable, NotFoundException } from '@nestjs/common';
import {Repository} from "typeorm";
import {PersonEntity} from "../entity/person.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { CreatePersonDto } from '../dto/personDtos/createPersonDto';
import { arrify } from 'ts-loader/dist/utils';

@Injectable()
export class PersonService {
    constructor(@InjectRepository(PersonEntity) private repo: Repository<PersonEntity>) {
    }

    onGetPersons() {
        return this.repo.find()
    }

    onGetPersonWithId(id: number) {
        return this.repo.findOneBy({id: id})
    }

    onCreatePerson(personDto:CreatePersonDto) {
        let person = this.repo.create(personDto)
        return this.repo.save(person)
    }

    async onUpdatePerson(id:number,attr :Partial<PersonEntity>){
        const person = await this.repo.findOneBy({id:id})
        if(!person){
            throw new NotFoundException('person with given id was not found')
        }
        Object.assign(person,attr)
        return  this.repo.save(person)
    }

    async onDeletePerson(id:number){
        const person= await this.repo.findBy({id:id})
        if(!person){
            throw new NotFoundException('person with given id was not found')
        }
        return this.repo.remove(person)
    }
}
