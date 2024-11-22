import { Document } from 'mongoose';

export interface Authentication extends Document {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
}
