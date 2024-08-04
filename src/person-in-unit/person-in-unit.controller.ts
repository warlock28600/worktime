import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PersonInUnitService } from './person-in-unit.service';
import { PeronInUnitCreateDto } from '../dto/person-in-unit/peron-in-unit-create.dto';
import { ReformatData } from '../enum/reformatData';

@Controller('personInUnit')
@ApiTags('PersonInUnit')
export class PersonInUnitController {

  constructor(private personInUnitService: PersonInUnitService) {
  }

  @Get()
  @ApiOperation({ summary: 'Getting All Person In Unit' })
  @ApiQuery({
    name: 'extra',
    required: false,
  })
  onGetAllPersonInUnit(@Query('extra') planeExtra?: string) {
    const extra = ReformatData.onReformatExtra(planeExtra);
    return this.personInUnitService.onGetAllPersonInUnit(extra);
  }

  @Get('/:id')
  @ApiParam({ name: 'Id', required: true })
  @ApiOperation({ summary: 'Get One PersonInUnit With PersonInUnitId' })
  @ApiQuery({
    name: 'extra',
    required: true,
  })
  onGetPersonInUnitWithId(@Param('id') id: number, @Query('extra') planeExtra?: string) {
    const extra = ReformatData.onReformatExtra(planeExtra);
    return this.personInUnitService.onGetPersonInUnitWithId(id, extra);
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
