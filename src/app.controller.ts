import { Controller, Get, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient()

class ForSwagger {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOkResponse({
    type: ForSwagger
  })
  async getHello(): Promise<ForSwagger> {
    const user = await db.user.findFirst({})
    return { message: user?.email || 'not found' }
  }
}
