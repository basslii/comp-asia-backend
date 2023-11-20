import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from "cookie-parser";
import { SeederService } from './database/seed/seeder.service';
import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const seeder = app.get(SeederService);
  await seeder.seed();

  const config = new DocumentBuilder()
    .setTitle('Comp Asia API')
    .setDescription('Comp Asia API documentation with CRUD functionality')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('documents/api', app, document);

  app.enableCors();
  app.use(cookieParser());

  await app.listen(8080);

}
bootstrap();
