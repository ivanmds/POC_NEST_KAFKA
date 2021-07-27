import { INestApplication } from "@nestjs/common"

export class KafkaConfig {

  static async init(app: INestApplication): Promise<any> {
    var consumer = app.get("CUSTOMER_CONSUMER");
    await consumer.init();
  }
}