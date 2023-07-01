import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { I18nMiddleware, I18nValidationExceptionFilter, I18nValidationPipe, i18nValidationErrorFactory } from 'nestjs-i18n';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new I18nValidationPipe(),
  );
 
  app.useGlobalFilters(new I18nValidationExceptionFilter());

  const config = new DocumentBuilder()
  .setTitle('Lecture Management System')
  .setDescription('The Lecture System API Description')
  .setVersion('1.0')
  .addTag('Lecture System')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
    'JWT-auth')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
