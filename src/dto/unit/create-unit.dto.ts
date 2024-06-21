import { PersonEntity } from '../../entity/person.entity';
import { IsNumber, IsString } from 'class-validator';

export class CreateUnitDto {
  @IsString()
  title: string;

  @IsNumber()
  manager: PersonEntity;
}