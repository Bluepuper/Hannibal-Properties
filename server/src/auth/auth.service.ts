import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs' 
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByUsername(userDto.username)
         if (candidate) {
            throw new HttpException('User with such email is existing', HttpStatus.BAD_REQUEST)
        }
        const hashedPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({ ...userDto, password: hashedPassword })
        return {token: this.generateToken(user)}
    }

    private async generateToken(user: User) {
        const payload = {email: user.username, id: user.id}
        return this.jwtService.sign(payload)
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByUsername(userDto.username)
        if (!user) {
            throw new UnauthorizedException({message: 'User with such email was not found'})
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'Incorrect password'})
    }

    async isAuthenticated(token: string) {
        try {
            const data = await this.jwtService.verifyAsync(token)
            const user = await this.userService.getUserByUsername(data.email)
            if (!user) throw new UnauthorizedException({message: 'User with such email was not found'})
            return true
        } catch (e) {
            throw new UnauthorizedException()
        }
    }
}
