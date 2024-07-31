import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonInUnitEntity } from '../entity/person-in-unit.entity';
import { Repository } from 'typeorm';
import { PeronInUnitCreateDto } from '../dto/person-in-unit/peron-in-unit-create.dto';

@Injectable()
export class PersonInUnitService {

  constructor(@InjectRepository(PersonInUnitEntity) private repo: Repository<PersonInUnitEntity>) {
  }

  onGetAllPersonInUnit() {
    return this.repo.find();
  }

  onCreatePersonInUnit(personInUnitDto: PeronInUnitCreateDto) {
    let person = this.repo.create(personInUnitDto);
    return this.repo.save(person);
  }
}
