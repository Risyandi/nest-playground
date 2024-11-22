import { Injectable } from '@nestjs/common';

@Injectable()
export class WelcomeService {
  getHello(version: string): string {
    return `Hello World! version ${version}`;
  }
}
