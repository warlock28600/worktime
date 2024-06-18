import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {

  @IsNumber()
  expireDate: number;

  @IsString()
  passWord: string;

  @IsNumber()
  personId: number;
}