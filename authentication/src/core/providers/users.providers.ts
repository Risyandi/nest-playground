import { Mongoose } from 'mongoose';
import { UsersSchema } from '../../app/modules/users/interfaces/users.interfaces';

export const UsersProviders = [
  {
    provide: 'USERS_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Users', UsersSchema),
    inject: ['MONGO_DATABASE_CONNECTION'],
  },
];
