import { Module } from '@nestjs/common';
import { PersonInUnitController } from './person-in-unit.controller';
import { PersonInUnitService } from './person-in-unit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonInUnitEntity } from '../entity/person-in-unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonInUnitEntity])],
  controllers: [PersonInUnitController],
  providers: [PersonInUnitService],
})
export class PersonInUnitModule {
}
