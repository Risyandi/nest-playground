/**
 * define mongodb schema manually not using decorators
 */

import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
