import { IsNumber, IsPositive } from 'class-validator';

export class PeronInUnitCreateDto {
  @IsNumber()
  @IsPositive()
  personId: number;

  @IsNumber()
  @IsPositive()
  unitId: number;

}