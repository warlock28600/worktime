import {IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";


export class CreateGenderDto{

  @IsString()
  @ApiProperty()
  title:string

}