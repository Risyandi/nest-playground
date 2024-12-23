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
import { UsersService } from './users.service';
import { CreateUsersDto, UpdateUsersDto } from './dto/users.dto';

@Controller({ path: 'users', version: '2' }) // specific version
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
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
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUsersDto: UpdateUsersDto) {
    return this.usersService.update(id, updateUsersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id).exec();
  }
}
