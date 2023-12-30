import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private passwordService: PasswordService) { }

    async signUp(email: string, password: string) {
        const user = await this.userService.findByEmail(email)
        if (user) throw new BadRequestException({ type: 'email_exists' })

        const salt = this.passwordService.createSalt()
        const hash = this.passwordService.createHash(password, salt)

        const newUser = await this.userService.create(email, hash, salt)

        // now we can create JWT token based on this user
        // then we will pass JWT to cookies 
        // and with JWT we're gonna login user

        // to do that we need to install:
        // 1. @nestjs/jwt
        // 2. cookie-parser (and types)
    }

    signIn(email: string, password: string) {

    }
}
