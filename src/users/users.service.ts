import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {

    private users : User[] = [];

    findAll() : User[] {
        return this.users;
    }

    create(user : User) : User {
        console.log("Users", this.users, user);
        this.users.push(user);
        return user;
    }
}
