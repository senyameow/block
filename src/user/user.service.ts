import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {

    constructor(private db: DbService) { }

    async findByEmail(email: string) {
        return await this.db.user.findUnique({
            where: {
                email
            }
        })
    }

    async create(email: string, hash: string, salt: string) {
        return await this.db.user.create({
            data: {
                hash,
                salt,
                email
            }
        })
    }
}
