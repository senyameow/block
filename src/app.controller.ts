import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';

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
  getHello(): ForSwagger {
    return { message: this.appService.getHello() }
  }
}
