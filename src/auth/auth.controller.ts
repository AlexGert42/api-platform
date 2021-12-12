import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUrerDto } from 'src/user/dto/create-user.dto';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}


    @Post('/login')
    login(@Body() userDto: CreateUrerDto) {
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUrerDto) {
        return this.authService.registration(userDto)
    }
}
