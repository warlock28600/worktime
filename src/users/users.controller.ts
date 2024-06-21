import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from '../dto/user/create-user.dto';
import {UsersEntity} from '../entity/users.entity';
import {SignInDto} from '../dto/user/sign-in.dto';
import {Serialize} from "../intercepters/serialize.interceptor";
import {UserDto} from "../dto/user/user.dto";
import {ApiBody, ApiOperation, ApiParam, ApiTags} from "@nestjs/swagger";

@Controller('users')
@ApiTags('User')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @Post('register')
    @Serialize(UserDto)
    @ApiBody({type: CreateUserDto})
    onCreateUser(@Body() userBody: CreateUserDto) {
        return this.userService.onCreateUser(userBody)
    }

    @Post('signIn')
    @ApiBody({type: SignInDto})
    @ApiOperation({summary: 'sign in with email and password'})
    onAuthentication(@Body() signInBody: SignInDto) {
        return this.userService.onSignInWithUserNameAndPassword(signInBody);
    }


    @Get()
    @Serialize(UserDto)
    @ApiOperation({summary: 'Get All Users'})
    async onGetAllUsers() {
        return await this.userService.onGetAllUser()
    }

    @Get('/:id')
    @Serialize(UserDto)
    @ApiOperation({summary: 'Get Users With Id'})
    @ApiParam({name: 'id', required: true, description: 'UserId'})
    onGetUserWithId(@Param('id') id: number) {
        return this.userService.onGetUserWithId(id)
    }


    @Put('/:UserId')
    @Serialize(UserDto)
    @ApiBody({type: SignInDto})
    @ApiParam({name: 'UserId', required: true})
    onUpdateUser(@Param('UserId') id: number, userBody: Partial<UsersEntity>) {
        return this.userService.onUpdateUser(id, userBody)
    }

    @Delete('/:UserId')
    @ApiParam({name: 'UserId', required: true})
    @Serialize(UserDto)
    onDeleteUser(@Param('UserId') id: number) {
        return this.userService.onDeleteUser(id)
    }
}
