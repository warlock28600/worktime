import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UnitEntity } from '../entity/unit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUnitDto } from '../dto/unit/create-unit.dto';

@Injectable()
export class UnitsService {

  constructor(@InjectRepository(UnitEntity) private repo: Repository<UnitEntity>) {
  }


  onGetAllUnits(extra?: any) {
    console.log(extra);
    return this.repo.find({relations: extra ?? []});

  }

  onGetUnitWithId(unitId: number ,extra?:string[]) {
    const unit = this.repo.findOne({ where: { id: unitId }, relations: extra ?? [] });
    if(!unit){
      throw new NotFoundException('the unit with given id not fount')
    }
    return unit
  }

  onCreateUnit(unitBody: CreateUnitDto) {
    const unit = this.repo.create(unitBody);
    return this.repo.save(unit);
  }

  async onUpdateUnit(unitId: number, unitBody: Partial<UnitEntity>) {
    const unit = await this.repo.findOne({where: {id: unitId}})
    if (!unit) {
      throw new NotFoundException('the unit with given id was not found')
    }
    Object.assign(unit, unitBody)
    return this.repo.save(unit)
  }

  async onDeleteUnit(unitId: number) {
    const unit = await this.repo.findOne({where: {id: unitId}})
    if (!unit) {
      throw new NotFoundException('the unit with given id was not found')
    }
    return this.repo.remove(unit)
  }

}
