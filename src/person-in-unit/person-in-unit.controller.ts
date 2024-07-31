import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PersonInUnitService } from './person-in-unit.service';

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


}
