import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

//* uncomment if you want to load configuration from file [configuration.ts]
// import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      //* set validation options
      validationSchema: Joi.object({
        PORT: Joi.number().port().default(3000),
      }),

      //* unknown environment variables will throw an error
      // validationOptions: {
      //   allowUnknown: false,
      //   abortEarly: true,
      // },

      //* set configuration use in other modules
      isGlobal: true,

      //* uncomment if you want to ignore use env file
      // ignoreEnvFile: true,

      //* uncomment if you want to custom set file path based on environment
      // envFilePath: ['.env.development.local', '.env.development'],

      //* uncomment if you want to load configuration from file [configuration.ts]
      //  allowing you to load multiple configuration file ex: [databaseConfig, authConfig]
      // load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
