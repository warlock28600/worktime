import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from '../dto/user/create-user.dto';
import {UsersEntity} from '../entity/users.entity';
import {SignInDto} from '../dto/user/sign-in.dto';
import {Serialize} from "../intercepters/serialize.interceptor";
import {UserDto} from "../dto/user/user.dto";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @Post('signIn')
    onAuthentication(@Body() signInBody: SignInDto) {
        return this.userService.onSignInWithUserNameAndPassword(signInBody);
    }


    @Get()
    @Serialize(UserDto)
    async onGetAllUsers() {
        return await this.userService.onGetAllUser()
    }

    @Get('/:id')
    @Serialize(UserDto)
    onGetUserWithId(@Param('id') id: number) {
        return this.userService.onGetUserWithId(id)
    }

    @Post('register')
    @Serialize(UserDto)
    onCreateUser(@Body() userBody: CreateUserDto) {
        return this.userService.onCreateUser(userBody)
    }

    @Put('/:id')
    @Serialize(UserDto)
    onUpdateUser(@Param('id') id: number, userBody: Partial<UsersEntity>) {
        return this.userService.onUpdateUser(id, userBody)
    }

    @Delete('/:id')
    @Serialize(UserDto)
    onDeleteUser(@Param('id') id: number) {
        return this.userService.onDeleteUser(id)
    }
}
