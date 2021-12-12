import { UserService } from './user.service';
import { CreateUrerDto } from './dto/create-user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';


@ApiTags('Users')
@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}


    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUrerDto) {
        return this.userService.createUser(userDto)
    }


    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

}
