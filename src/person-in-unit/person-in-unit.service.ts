import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonInUnitEntity } from '../entity/person-in-unit.entity';
import { Repository } from 'typeorm';
import { PeronInUnitCreateDto } from '../dto/person-in-unit/peron-in-unit-create.dto';

@Injectable()
export class PersonInUnitService {

  constructor(@InjectRepository(PersonInUnitEntity) private repo: Repository<PersonInUnitEntity>) {
  }

  onGetAllPersonInUnit(extra?: string[]) {
    return this.repo.find({ relations: extra ?? [] });
  }

  onGetPersonInUnitWithId(PersonInUnitId: number, extra?: string[]) {
    let person = this.repo.findOne({
      where: { id: PersonInUnitId },
      relations: extra ?? [],
    });
    if (!person) {
      throw new NotFoundException('the id you provide dose not exists');
    }
    return person;
  }

  onCreatePersonInUnit(personInUnitDto: PeronInUnitCreateDto) {
    let person = this.repo.create(personInUnitDto);
    return this.repo.save(person);
  }

  async onUpdatePersonInUnit(personInUnitId: number, attr: Partial<PeronInUnitCreateDto>) {
    let person = await this.onGetPersonInUnitWithId(personInUnitId);
    if (!person) {
      throw new NotFoundException('the id you provide dose not exists');
    }
    Object.assign(person, attr);
    return this.repo.save(person);
  }


  async onDeletePersonFromUnit(id: number) {
    let person = await this.onGetPersonInUnitWithId(id);
    if (!person) {
      throw new NotFoundException('the id you provide dose not exists');
    }
    return this.repo.remove(person);
  }


}

