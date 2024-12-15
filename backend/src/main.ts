import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as logger from "morgan"
import helmet from "helmet"
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log'] });
  app.use(logger('dev'))
  app.use(helmet())
  app.enableCors();
  await app.listen(7200);
}
bootstrap();
