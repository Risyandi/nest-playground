import { Injectable } from '@nestjs/common';

@Injectable()
export class WelcomeService {
  getHello(version: string): string {
    console.log('risyandi ~ WelcomeService ~ getHello ~ version:', version);
    return `Hello World! version ${version}`;
  }
}
