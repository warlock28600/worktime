import { Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import {PersonService} from "./person.service";
import { CreatePersonDto } from '../dto/personDtos/createPersonDto';


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
        if(!person){
            throw new NotFoundException('person with given id not found')
        }
        return person
    }

    @Post()
    createPerson(@Body() body :CreatePersonDto){
        return this.personService.onCreatePerson(body)
    }

    @Put('/:id')
    updatePerson(@Param('id') id:number,@Body() body : CreatePersonDto){
        return  this.personService.onUpdatePerson(id,body)
    }
}
