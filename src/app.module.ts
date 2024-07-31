import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './entity/person.entity';
import { GenderEntity } from './entity/gender.entity';
import { GenderModule } from './gender/gender.module';
import { UsersModule } from './users/users.module';
import { UsersEntity } from './entity/users.entity';
import { UnitsModule } from './units/units.module';
import { UnitEntity } from './entity/unit.entity';
import { PersonInUnitEntity } from './entity/person-in-unit.entity';
import { PersonInUnitModule } from './person-in-unit/person-in-unit.module';

@Module({
  imports: [PersonModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'F.ei28600',
    database: 'WorkTime',
    synchronize: true,
    logging: true,
    entities: [PersonEntity, GenderEntity, UsersEntity, UnitEntity, PersonInUnitEntity],
    // type:'sqlite',
    // database:'workTime.sqlite',
    // entities: [PersonEntity, GenderEntity, UsersEntity, UnitEntity,PersonInUnitEntity],
    // synchronize:true
  }), GenderModule, UsersModule, UnitsModule, PersonInUnitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
