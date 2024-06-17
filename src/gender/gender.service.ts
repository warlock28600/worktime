import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenderEntity } from '../entity/gender.entity';
import { Repository } from 'typeorm';
import { CreateGenderDto } from '../dto/gender/create-gender.dto';

@Injectable()
export class GenderService {

  constructor(@InjectRepository(GenderEntity) private repo : Repository<GenderEntity>) {
  }

  onGetGenders(){
    return this.repo.find()
  }

  async onGetGenderWithId(id:number){
    const gender = await this.repo.findOneBy({id:id})
    if(!gender){
      throw new NotFoundException('gender with given id not found')
    }
    return gender
  }

  onCreateGender(genderBody :CreateGenderDto){
    const gender=this.repo.create(genderBody)
    return  this.repo.save(gender)
  }

  async onUpdateGender(id:number,genderBody :Partial<GenderEntity>){
    const gender = await this.onGetGenderWithId(id)
    Object.assign(gender , genderBody)
    return  this.repo.save(gender)
  }

  async onDeleteGender(id:number){
    const gender=await this.onGetGenderWithId(id)
    return  this.repo.remove(gender)

  }



}
