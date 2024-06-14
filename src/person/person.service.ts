import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {PersonEntity} from "../entity/person.entity";
import {InjectRepository} from "@nestjs/typeorm";

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

    onCreatePerson(personDto: {}) {
        let person = this.repo.create(personDto)
        return this.repo.save(person)
    }
}
