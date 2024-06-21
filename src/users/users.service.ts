import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {UsersEntity} from '../entity/users.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateUserDto} from '../dto/user/create-user.dto';
import * as bcrypt from 'bcrypt';
import {SignInDto} from '../dto/user/sign-in.dto';
import {PersonService} from '../person/person.service';
import {JwtService} from '@nestjs/jwt';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UsersEntity) private repo: Repository<UsersEntity>,
    private personService: PersonService,
    private jwtService: JwtService,
  ) {

  }

  onGetAllUser() {
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
    userBody.passWord = await bcrypt.hash(userBody.passWord, 12);
    const user = this.repo.create(userBody);
    return this.repo.save(user);
  }


  async onUpdateUser(id: number, userBody: Partial<UsersEntity>) {
    const user = await this.onGetUserWithId(id);
    if (!user) {
      throw new NotFoundException('the user with given id was not found');
    }
    Object.assign(user, userBody);
    return this.repo.save(user);
  }

  async onDeleteUser(id: number) {
    const user = await this.onGetUserWithId(id)
    if (!user) {
      throw new NotFoundException('the user with given id was not found')
    }

    return this.repo.remove(user)
  }


  async onSignInWithUserNameAndPassword(signInBody: SignInDto) {
    const person = await this.personService.onGetPersonForAuth(signInBody.email);
    const user = await this.repo.findOne({ where: { person: person } });
    if (!bcrypt.compareSync(signInBody.password, user.passWord)) {
      throw new UnauthorizedException('Unauthorized');
    }

    const payload = {
      userId: user.id,
      personId: person.id,
      email: person.email,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };

  }
}
