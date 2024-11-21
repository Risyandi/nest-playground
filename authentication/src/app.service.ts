import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(version: string): string {
    return `Hello World! version ${version}`;
  }
}
