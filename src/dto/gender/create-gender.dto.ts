import { IsString } from 'class-validator';


export class CreateGenderDto{

  @IsString()
  title:string

}