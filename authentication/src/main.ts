import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  //* allow Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain.
  app.enableCors();
  // type: VersioningType.URI,

  //* enable versioning
  app.enableVersioning({
    defaultVersion: '1', // set defaultglobal version
    type: VersioningType.URI,
  });

  //* start server
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
