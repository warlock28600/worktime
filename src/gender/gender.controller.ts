import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from '../dto/gender/create-gender.dto';
import { GenderEntity } from '../entity/gender.entity';

@Controller('gender')
export class GenderController {

  constructor(private genderService:GenderService) {
  }

  @Get()
  onGetAllGenders(){
    return this.genderService.onGetGenders()
  }

  @Get('/:id')
  onGetGenderWithId(@Param('id') id:number){
    return this.genderService.onGetGenderWithId(id)
  }

  @Post()
  onCreateGender(@Body() genderBody : CreateGenderDto){
    return this.genderService.onCreateGender(genderBody)
  }

  @Put('/:id')
  onUpdateGender(@Param('id') id:number , genderBody :Partial<GenderEntity>){
    return this.genderService.onUpdateGender(id,genderBody)
  }

  @Delete('/:id')
  onDeleteGender(@Param('id') id:number){
    return this.genderService.onDeleteGender(id)
  }

}
