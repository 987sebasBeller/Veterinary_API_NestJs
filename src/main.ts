import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // si o si poner para la validacion de los DTO NO TE OLVIDES!!!!!
  await app.listen(3000);

}
bootstrap();
