import { IsEmail, IsString, Max, Min } from 'class-validator';


export  class CreatePersonDto {
  @IsString()
  @Max(50)
  @Min(3)
  firstName:string

  @IsString()
  @Min(3)
  @Max(50)
  lastName:string

  @IsEmail()
  email:string
}