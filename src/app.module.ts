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

@Module({
  imports: [PersonModule,TypeOrmModule.forRoot({
    type:'sqlite',
    database:'workTime.sqlite',
    entities: [PersonEntity, GenderEntity, UsersEntity],
    synchronize:true
  }), GenderModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
