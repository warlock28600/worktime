import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UnitsService } from './units.service';
import { CreateUnitDto } from '../dto/unit/create-unit.dto';
import { UnitEntity } from '../entity/unit.entity';
import { ReformatData } from 'src/enum/reformatData';

@Controller('units')
@ApiTags('Unit')
export class UnitsController {

  constructor(private unitService: UnitsService) {
  }

  @Get()
  @ApiOperation({ summary: 'Getting All Units' })
  @ApiQuery({
    name: 'extra',
    required: false,
  })
  onGetAllUnits(@Query('extra') planeExtra?: string) {
    const extra = ReformatData.onReformatExtra(planeExtra);
    return this.unitService.onGetAllUnits(extra);
  }

  @Get('/:UnitId')
  @ApiOperation({ summary: 'Getting Unit With Id' })
  @ApiParam({
    name: 'UnitId',
    required: true,
  })
  @ApiQuery({name :'extra',required:false})
  onGetUnitWithId(@Param('UnitId') unitId: number,@Query('extra') planeExtra:string) {
    const extra=ReformatData.onReformatExtra(planeExtra)
    return this.unitService.onGetUnitWithId(unitId,extra);
  }

  @Post()
  @ApiOperation({ summary: 'Create Unit' })
  @ApiBody({ type: CreateUnitDto })
  onCreateUnit(@Body() unitBody: CreateUnitDto) {
    return this.unitService.onCreateUnit(unitBody);
  }

  @Put('/:UnitId')
  @ApiOperation({ summary: 'Update Unit' })
  @ApiParam({
    name: 'UnitId',
    required: true,
  })
  @ApiBody({ type: CreateUnitDto })
  onUpdateUnit(@Param('UnitId') unitId: number, @Body() unitBody: Partial<UnitEntity>) {
    return this.unitService.onUpdateUnit(unitId, unitBody);
  }

  @Delete('/:UnitId')
  @ApiOperation({ summary: 'Delete Unit' })
  @ApiParam({
    name: 'UnitId',
    required: true,
  })
  onDeleteUnit(@Param('UnitId') unitId: number) {
    return this.unitService.onDeleteUnit(unitId);
  }


}
