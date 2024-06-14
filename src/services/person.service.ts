import {Repository} from "typeorm";
import {PersonEntity} from "../entity/person.entity";

export class PersonService {

    constructor(private repo: Repository<PersonEntity>) {
    }

    onGetAllPerson() {
        return this.repo.find()
    }

    onGetPersonWithId() {
    }

    onCreatePerson() {
    }

    onUpdatePerson() {
    }

    onDeletePerson() {
    }


}