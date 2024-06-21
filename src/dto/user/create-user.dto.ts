import {IsNumber, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

  @IsNumber()
  @ApiProperty()
  expireDate: number;

  @IsString()
  @ApiProperty()
  passWord: string;

  @IsNumber()
  @ApiProperty()
  personId: number;
}