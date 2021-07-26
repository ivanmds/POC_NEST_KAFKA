import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { KafkaConfig } from './startup/kafka.config';
import { SwaggerConfig } from './startup/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");

  KafkaConfig.init(app);
  SwaggerConfig.init(app);

  await app.listen(3000);
}
bootstrap();