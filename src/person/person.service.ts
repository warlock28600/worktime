import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PersonEntity } from '../entity/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto } from '../dto/personDtos/createPersonDto';

@Injectable()
export class PersonService {
  constructor(@InjectRepository(PersonEntity) private repo: Repository<PersonEntity>) {
  }

  onGetPersons(extra:string[]) {
    return this.repo.find({ relations: extra ?? [] });
  }

  onGetPersonWithId(id: number) {
    return this.repo.findOne({
      where: { id: id },
      relations: ['gender'],
    });
  }

  onGetPersonForAuth(email: string) {
    const person = this.repo.findOne({ where: { email: email } });
    console.log(person);
    return person;
  }

  onCreatePerson(personDto: CreatePersonDto) {
    let person = this.repo.create(personDto);
    return this.repo.save(person);
  }

  async onUpdatePerson(id: number, attr: Partial<CreatePersonDto>) {
    const person = await this.onGetPersonWithId(id);
    console.log(person);
    console.log(attr);
    if (!person) {
      throw new NotFoundException('person with given id was not found');
    }
    Object.assign(person, attr);
    return this.repo.save(person);
  }

  async onDeletePerson(id: number) {
    const person = await this.repo.findBy({ id: id });
    if (!person) {
      throw new NotFoundException('person with given id was not found');
    }
    return this.repo.remove(person);
  }

  async onApprovePerson(personId: number, personBody: Partial<PersonEntity>) {
    const person = await this.onGetPersonWithId(personId);
    if (!person) {
      throw new NotFoundException('person with given id was not found');
    }
    Object.assign(person, personBody);
    return this.repo.save(person);
  }
}
