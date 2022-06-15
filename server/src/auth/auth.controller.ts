import { Body, Controller, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.model';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { JwtService } from "@nestjs/jwt";

@Controller('auth')
export class AuthController {

    constructor( private authService: AuthService ) {}

    @Post('/login')
    async login(
        @Body() userDto: CreateUserDto,
        @Res({passthrough: true}) response: Response,
    ) {
        const token = await this.authService.login(userDto)
        response.cookie('jwt', token, {httpOnly: true})
        return {token: token}
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }
    
    @Post('/logout')
    async logout(
        @Res({passthrough: true}) response: Response
    ) {
        response.clearCookie('jwt')
        return {
            message: 'You are logged out'
        }
    }

    @Post('isAuthenticated')
    isAuthenticated(
        @Req() request: Request
    ) {
        const token = request.cookies["jwt"]
        return this.authService.isAuthenticated(token)

        
    }
}

