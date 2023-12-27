import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { DbService } from './db/db.service';

class ForSwagger {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private db: DbService) { }

  @Get()
  @ApiOkResponse({
    type: ForSwagger
  })
  async getHello(): Promise<ForSwagger> {
    const user = await this.db.user.findFirst({})
    return { message: user?.email || 'not found' }
  }
}
