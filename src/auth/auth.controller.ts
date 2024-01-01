import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CookieService } from './cookie.service';
import { Response } from 'express'
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService, private cookieService: CookieService) { }

    @Post('sign-up')
    @ApiCreatedResponse()
    async signUp(@Body() body: SignUpBodyDto, @Res({ passthrough: true }) res: Response) {
        const { token } = await this.authService.signUp(body.email, body.password)
        this.cookieService.setToken(res, token)
    }

    @Post('sign-in')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() body: SignInBodyDto, @Res({ passthrough: true }) res: Response) {
        const { token } = await this.authService.signIn(body.email, body.password)
        this.cookieService.setToken(res, token)
    }

    @Post('sign-out')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    signOut() {
    }

    @Get('session')
    @ApiOkResponse({
        type: GetSessionInfoDto
    })
    @UseGuards(AuthGuard)
    getSession() {
        return null
    }
}
