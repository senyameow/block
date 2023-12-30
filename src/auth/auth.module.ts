import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { CookieService } from './cookie.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AuthController],
  imports: [UserModule],
  providers: [AuthService, PasswordService, CookieService]
})
export class AuthModule { }
