import {IsEmail, IsNumber, IsPositive, IsString, Max, Min} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";


export  class CreatePersonDto {
  @IsString()
  @Max(50)
  @Min(3)
  @ApiProperty()
  firstName:string

  @IsString()
  @Min(3)
  @Max(50)
  @ApiProperty()
  lastName:string

  @IsEmail()
  @ApiProperty()
  email:string

  @IsString()
  @ApiProperty()
  @Max(10)
  @Min(10)
  nationalCode:string

  @IsString()
  @Max(200)
  @ApiProperty()
  address:string

  @IsString()
  @ApiProperty()
  mobile:string

  @IsString()
  @ApiProperty()
  idno:string

  @IsString()
  @ApiProperty()
  @Max(50)
  fatherName:string

  @IsNumber()
  @ApiProperty()
  @IsPositive()
  genderId:number

}