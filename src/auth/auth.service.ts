import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, passwordService: PasswordService) { }

    async signUp(email: string, password: string) {
        const user = await this.userService.findByEmail(email)
        if (user) throw new BadRequestException({ type: 'email_exists' })

        await this.userService.create(email,)
    }

    signIn(email: string, password: string)
}
