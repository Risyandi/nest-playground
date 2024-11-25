import * as mongoose from 'mongoose';
import config from '../../config/configuration';

export const databaseProviders = [
  {
    provide: 'MONGO_DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(config().mongodbUrl),
  },
];
