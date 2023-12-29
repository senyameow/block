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
    }

    signIn(email: string, password: string) {

    }
}
