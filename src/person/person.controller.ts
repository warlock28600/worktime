import {Controller, Get, Param} from '@nestjs/common';
import {PersonService} from "./person.service";


@Controller('person')
export class PersonController {

    constructor(private personService: PersonService) {
    }

    @Get()
    getAllPerson() {
        return this.personService.onGetPersons()
    }

    @Get('/:id')
    async getPersonWithId(@Param('id') id: number) {
        const person = await this.personService.onGetPersonWithId(id)
    }
}
