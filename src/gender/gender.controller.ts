import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {GenderService} from './gender.service';
import {CreateGenderDto} from '../dto/gender/create-gender.dto';
import {GenderEntity} from '../entity/gender.entity';
import {ApiBody, ApiOperation, ApiParam, ApiTags} from "@nestjs/swagger";

@Controller('gender')
@ApiTags('Gender')
export class GenderController {

  constructor(private genderService:GenderService) {
  }

  @Get()
  @ApiOperation({summary: 'Get All Genders'})
  onGetAllGenders(){
    return this.genderService.onGetGenders()
  }

  @Get('/:GenderId')
  @ApiParam({name: 'GenderId', required: true})
  @ApiOperation({summary: 'Get Gender With Ip'})
  onGetGenderWithId(@Param('GenderId') id: number) {
    return this.genderService.onGetGenderWithId(id)
  }

  @Post()
  @ApiOperation({summary: 'Create Gender'})
  @ApiBody({type: CreateGenderDto})
  onCreateGender(@Body() genderBody : CreateGenderDto){
    return this.genderService.onCreateGender(genderBody)
  }

  @Put('/:GenderId')
  @ApiOperation({summary: 'Update Gender'})
  @ApiParam({name: 'GenderId', required: true})
  @ApiBody({type: CreateGenderDto})
  onUpdateGender(@Param('GenderId') id: number, genderBody: Partial<GenderEntity>) {
    return this.genderService.onUpdateGender(id,genderBody)
  }

  @Delete('/:GenderId')
  @ApiOperation({summary: 'Delete Gender'})
  @ApiParam({name: 'GenderId', required: true})
  onDeleteGender(@Param('GenderId') id: number) {
    return this.genderService.onDeleteGender(id)
  }

}
