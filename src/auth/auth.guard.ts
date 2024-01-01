import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express'
import { CookieService } from './cookie.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const req = context.switchToHttp().getRequest() as Request
    const token = req.cookies[CookieService.token_key]

    // если токена нет то 401 сразу

    if (!token) throw new UnauthorizedException()

    try {
      // если же токен есть, то его надо проверить
      const session = this.jwtService.verifyAsync(token, { secret: process.env.SECRET_JWT })
      // и запишем информацию в реквест

      req['session'] = session

    } catch (error) {
      throw new UnauthorizedException()
    }
    return true;
  }
}
