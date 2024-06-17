import { Module } from '@nestjs/common';
import { GenderController } from './gender.controller';
import { GenderService } from './gender.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderEntity } from '../entity/gender.entity';

@Module({
  imports:[TypeOrmModule.forFeature([GenderEntity])],
  controllers: [GenderController],
  providers: [GenderService]
})
export class GenderModule {}
