// the data transfer object of authentication
import { PartialType } from '@nestjs/mapped-types';

export class CreateAuthDto {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
}

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
