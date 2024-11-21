import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // get hello version 1
  @Version('1')
  @Get('hello')
  getHelloV1(): string {
    return this.appService.getHello('#1');
  }

  // get hello version 2
  @Version('2')
  @Get('hello')
  getHelloV2(): string {
    return this.appService.getHello('#2');
  }
}
