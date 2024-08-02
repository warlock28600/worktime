import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PersonInUnitService } from './person-in-unit.service';
import { PeronInUnitCreateDto } from '../dto/person-in-unit/peron-in-unit-create.dto';

@Controller('person-in-unit')
@ApiTags('PersonInUnit')
export class PersonInUnitController {

  constructor(private personInUnitService: PersonInUnitService) {
  }

  @Get()
  @ApiOperation({ summary: 'Getting All Person In Unit' })
  onGetAllPersonInUnit() {
    return this.personInUnitService.onGetAllPersonInUnit();
  }

  @Get('/:id')
  @ApiParam({ name: 'Id', required: true })
  @ApiOperation({ summary: 'Get One PersonInUnit With PersonInUnitId' })
  onGetPersonInUnitWithId(@Param('id') id: number) {
    return this.personInUnitService.onGetPersonInUnitWithId(id);
  }

  @Post()
  @ApiOperation({ summary: 'assign person in unit' })
  @ApiBody({ type: PeronInUnitCreateDto })
  onCreatePersonInUnit(@Body() body: PeronInUnitCreateDto) {
    return this.personInUnitService.onCreatePersonInUnit(body);
  }


  @Put('/:id')
  @ApiOperation({ summary: 'Update existing PersonInUnit' })
  @ApiBody({ type: PeronInUnitCreateDto })
  @ApiParam({ name: 'id', required: true })
  onUpdatePersonInUnit(@Param('id') id: number, @Body() body: PeronInUnitCreateDto) {
    return this.personInUnitService.onUpdatePersonInUnit(id, body);
  }

  @Delete('/:id')
  @ApiParam({ name: 'PersonInUnitId', required: true })
  @ApiOperation({ summary: 'Delete Person In Unit' })
  onDeletePersonInUnit(@Param('id') id: number) {
    return this.onDeletePersonInUnit(id);
  }

}
