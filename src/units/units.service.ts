import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UnitEntity } from '../entity/unit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUnitDto } from '../dto/unit/create-unit.dto';

@Injectable()
export class UnitsService {

  constructor(@InjectRepository(UnitEntity) private repo: Repository<UnitEntity>) {
  }


  onGetAllUnits() {
    return this.repo.find({ relations: ['person'] });
  }

  onGetUnitWithId(unitId: number) {
    const unit = this.repo.findOne({ where: { id: unitId }, relations: ['person'] });
  }

  onCreateUnit(unitBody: CreateUnitDto) {
    const unit = this.repo.create(unitBody);
    return this.repo.save(unit);
  }

  onUpdateUnit() {
  }

  onDeleteUnit() {
  }

}
