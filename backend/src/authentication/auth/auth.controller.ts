import { Controller, Post, Get, UseGuards, Request, ForbiddenException, Body, ValidationPipe } from '@nestjs/common';
import { LocalAuthGuard } from './local.auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.auth.guard';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private readonly usersService: UsersService) { }
    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Request() req): any {
        return this.authService.login(req.user);
    }
    @Post('signup')
    signup(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    async logout(@Request() req): Promise<any> {
        if (req.user) {
            return { message: 'Logout successful' };
        } else {
            throw new ForbiddenException();
        }
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async protected(@Request() req): Promise<any> {
        return req.user;
    }
}
