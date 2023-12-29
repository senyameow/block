import { Injectable } from '@nestjs/common';
import { randomBytes, pbkdf2Sync } from 'crypto'

@Injectable()
export class PasswordService {
    createSalt() {
        return randomBytes(16).toString('hex')
    }

    createHash(password: string, salt: string) {
        return pbkdf2Sync(password, this.createSalt(), 1000, 64, 'sha512').toString('hex')
    }
}
