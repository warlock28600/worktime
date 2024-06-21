import {IsNumber, IsObject, IsString} from "class-validator";
import {Exclude, Expose} from "class-transformer";
import {GetAllDataDto} from "../personDtos/getAllData.dto";

export class UserDto {
    @IsNumber()
    @Expose()
    id: number;

    @Exclude()
    @IsString()
    passWord: string

    @IsNumber()
    @Expose()
    expireDate: number;

    @Expose()
    @IsObject()
    person: GetAllDataDto;
}