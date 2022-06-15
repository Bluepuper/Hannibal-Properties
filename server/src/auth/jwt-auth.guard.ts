import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor( private jwtService: JwtService ) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const token = req.cookies['jwt']
            
            if (!token) throw new UnauthorizedException({message: 'User is not authorized'})

            const user = this.jwtService.verify(token)

            req.user = user
            
            return true
        } catch (e) {
            throw new UnauthorizedException({error: 'User is not authorized'})
        }
    }

}