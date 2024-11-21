import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //* allow Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain.
  app.enableCors();

  //* enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  //* start server
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
