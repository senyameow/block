import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('sign-up')
    @ApiCreatedResponse()
    async signUp(@Body() body: SignUpBodyDto) {
        const { token } = await this.authService.signUp(body.email, body.password)
    }

    @Post('sign-in')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    signIn(@Body() body: SignInBodyDto) {
        return null
    }

    @Post('sign-out')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    signOut() {
    }

    @Get('session')
    @ApiOkResponse({
        type: GetSessionInfoDto
    })
    getSession() {
        return null
    }
}
