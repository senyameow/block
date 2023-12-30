import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { CookieService } from './cookie.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [UserModule, JwtModule.register({
    global: true,
    secret: process.env.SECRET_JWT,
    signOptions: {
      expiresIn: '1d'
    }
  })],
  providers: [AuthService, PasswordService, CookieService]
})
export class AuthModule { }
