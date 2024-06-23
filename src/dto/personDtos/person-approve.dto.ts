import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsEmail, IsNumber, IsPositive, IsString, Max, Min} from 'class-validator';

export class PersonApproveDto {
  @IsBoolean()
  @ApiProperty()
  Approved: boolean;
}