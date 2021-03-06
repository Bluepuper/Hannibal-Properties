import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef( () => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'THATSECRETKEY',
      signOptions: {
        expiresIn: '1h'
      }
    })
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
