import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { Request } from 'express'; // ex: get value from request using method express, the method similar "Body" in @nestjs/common
import { AuthService } from './auth.service';
import { CreateAuthDto, UpdateAuthDto } from './dto/auth.dto';

@Controller({ path: 'auth', version: '2' }) // specific version
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    console.log(
      'risyandi ~ AuthController ~ findAll ~ Request.query:',
      request.query,
    );
    console.log(
      'risyandi ~ AuthController ~ findAll ~ Request.body:',
      request.body,
    );
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.authService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.authService.remove(id).exec();
  }
}
