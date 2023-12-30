import { Injectable } from '@nestjs/common';
import { Response } from 'express'

@Injectable()
export class CookieService {

    static token_key = 'access-token'

    setToken(res: Response, token: string) {
        res.cookie(CookieService.token_key, token, { httpOnly: true, maxAge: 26 * 60 * 60 * 1000 })
    }
    removeToken(res: Response) {
        res.clearCookie(CookieService.token_key)
    }
}
