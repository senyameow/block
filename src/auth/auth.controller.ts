import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('sign-up')
    signUp() {

    }

    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    signIn() {

    }

    @Post('sign-out')
    @HttpCode(HttpStatus.OK)
    signOut() {

    }

    @Get('session')
    getSession() {

    }
}
