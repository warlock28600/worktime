import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {PersonService} from "./person.service";
import {CreatePersonDto} from '../dto/personDtos/createPersonDto';
import {ApiBody, ApiOperation, ApiParam, ApiTags} from "@nestjs/swagger";
import { PersonApproveDto } from 'src/dto/personDtos/person-approve.dto';

@ApiTags('Person')
@Controller('person')
export class PersonController {

    constructor(private personService: PersonService) {
    }

    @Get()
    @ApiOperation({summary: 'Get All Persons'})
    getAllPerson() {
        return this.personService.onGetPersons()
    }

    @Get('/:id')
    @ApiParam({name: 'id', required: true})
    @ApiOperation({summary: 'Getting Person With Id'})
    async getPersonWithId(@Param('id') id: number) {
        const person = await this.personService.onGetPersonWithId(id)
        if(!person){
            throw new NotFoundException('person with given id not found')
        }
        return person
    }

    @Post()
    @ApiBody({type: CreatePersonDto})
    createPerson(@Body() body :CreatePersonDto){
        return this.personService.onCreatePerson(body)
    }

    @Put('/:id')
    @ApiParam({name: 'id', required: true})
    @ApiBody({type: CreatePersonDto})
    updatePerson(@Param('id') id: number, @Body() body: Partial<CreatePersonDto>) {
        return  this.personService.onUpdatePerson(id,body)
    }

    @Delete('/:id')
    @ApiParam({name: 'id', required: true})
    onDeletePerson(@Param('id') id:number){
        return this.personService.onDeletePerson(id)
    }

    @Put('/:personId')
    @ApiOperation({summary:'Approved Person'})
    @ApiParam({name:'personId' , required:true})
    @ApiBody({type:PersonApproveDto})
    onApprovedPerson(@Param('personId') personId:number ,@Body() body :PersonApproveDto){
        return this.personService.onApprovePerson(personId,body)
    }
}
