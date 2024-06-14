import {Module} from '@nestjs/common';
import {PersonController} from './person.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PersonEntity} from "../entity/person.entity";
import {PersonService} from './person.service';

@Module({
  imports:[TypeOrmModule.forFeature([PersonEntity])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
