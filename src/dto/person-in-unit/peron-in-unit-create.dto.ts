import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PeronInUnitCreateDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  personId: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  unitId: number;

}