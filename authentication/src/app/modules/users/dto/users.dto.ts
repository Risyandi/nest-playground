// the data transfer object of authentication
import { PartialType } from '@nestjs/mapped-types';

export class CreateUsersDto {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
}

export class UpdateUsersDto extends PartialType(CreateUsersDto) {}

export class DeleteUsersDto {
  readonly id: number;
}
