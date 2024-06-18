import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from '../entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/user/create-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  constructor(@InjectRepository(UsersEntity) private repo: Repository<UsersEntity>) {

  }

  onGEtAllUser() {
    return this.repo.find({ relations: ['person'] });
  }

  async onGetUserWithId(id: number) {
    const user = await this.repo.findOne({ where: { id: id }, relations: ['person'] });
    if (!user) {
      throw new NotFoundException('the user with given id was not found');
    }
    return user;
  }

  async onCreateUser(userBody: CreateUserDto) {
    userBody.passWord = await bcrypt.hash(userBody.passWord, '12');
    const user = this.repo.create(userBody);
    return this.repo.save(user);
  }


  async onUpdateUser(id: number, userBody: Partial<UsersEntity>) {
    const user = await this.onGetUserWithId(id);
    if (!user) {
      throw new NotFoundException('the user with given id was not found');
    }
    Object.assign(user, userBody);
    this.repo.save(user);
  }

  onDeleteUser(id: number) {

  }
}
