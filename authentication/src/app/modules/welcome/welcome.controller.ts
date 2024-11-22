import { Controller, Get, Version } from '@nestjs/common';
import { WelcomeService } from './welcome.service';

@Controller()
export class WelcomeController {
  constructor(private readonly welcomeService: WelcomeService) {}

  // get hello version 1
  @Get('hello')
  getHelloV1(): string {
    return this.welcomeService.getHello('#1');
  }

  // get hello version 2
  @Version('2')
  @Get('hello')
  getHelloV2(): string {
    return this.welcomeService.getHello('#2');
  }
}
