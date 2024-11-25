import { Mongoose } from 'mongoose';
import { AuthSchema } from '../../app/modules/auth/entities/auth.entity';

export const AuthProviders = [
  {
    provide: 'AUTH_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Auth', AuthSchema),
    inject: ['MONGO_DATABASE_CONNECTION'],
  },
];
