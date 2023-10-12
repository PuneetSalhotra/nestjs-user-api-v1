import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
@Controller('users')
export class UsersController {

    constructor (private readonly usersService : UsersService) {}

    @Get()
    findAll() : User[] {
        return this.usersService.findAll();
    } 

    @Post()
    create(@Body() user : User) : User {
        return this.usersService.create(user);
    } 
}
