import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PersonEntity} from "./entity/person.entity";

@Module({
  imports: [PersonModule,TypeOrmModule.forRoot({
    type:'sqlite',
    database:'workTime.sqlite',
    entities:[PersonEntity],
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
