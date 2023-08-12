import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Cada que ejecute una ruta va haber una validacion
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
