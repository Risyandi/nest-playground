import { Document } from 'mongoose';

export interface Users extends Document {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
}
