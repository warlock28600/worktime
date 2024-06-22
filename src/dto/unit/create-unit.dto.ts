import {IsNumber, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUnitDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsNumber()
  @ApiProperty()
  managerId: number;
}