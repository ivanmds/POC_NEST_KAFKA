import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { KafkaConfig } from './startup/consumer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  KafkaConfig.init(app);

  await app.listen(3000);
}
bootstrap();