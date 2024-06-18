import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "../dto/user/create-user.dto";
import {UsersEntity} from "../entity/users.entity";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @Get()
    onGetAllUsers() {
        return this.userService.onGetAllUser()
    }

    @Get('/:id')
    onGetUserWithId(@Param('id') id: number) {
        return this.userService.onGetUserWithId(id)
    }

    @Post('register')
    onCreateUser(@Body() userBody: CreateUserDto) {
        return this.userService.onCreateUser(userBody)
    }

    @Put('/:id')
    onUpdateUser(@Param('id') id: number, userBody: Partial<UsersEntity>) {
        return this.userService.onUpdateUser(id, userBody)
    }

    @Delete('/:id')
    onDeleteUser(@Param('id') id: number) {
        return this.userService.onDeleteUser(id)
    }
}
