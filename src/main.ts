import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

/* Load .env when NOT in Production */
const environment = (process.env.NODE_ENV || 'env').toLowerCase();

if (environment !== 'prod' && environment !== 'production') {
  const envPath = join(__dirname, '..', '.env');
  dotenv.config({ path: envPath });
}

/* Nest Core Imports */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  /* Express API and Port Def */
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Email Sender')
    .setDescription('Email Sender API')
    .setVersion('1.0')
    .build();

  /* Enabling CORS */
  const allowedOrigins = [
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8081',
    'http://localhost:8082',
    'http://127.0.0.1',
  ];
  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  });

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(port);
}
bootstrap();
