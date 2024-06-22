import {IsEmail, IsNumber, IsPositive, IsString, Max, Min} from "class-validator";

export class GetAllDataDto {

    @IsString()
    @Max(50)
    @Min(3)
    firstName: string

    @IsString()
    @Min(3)
    @Max(50)
    lastName: string

    @IsEmail()
    email: string

    @IsString()
    @Max(10)
    @Min(10)
    nationalCode: string

    @IsString()
    @Max(200)
    address: string

    @IsString()
    mobile: string

    @IsString()
    idno: string

    @IsString()
    @Max(50)
    fatherName: string

    @IsNumber()
    @IsPositive()
    gender: number
}