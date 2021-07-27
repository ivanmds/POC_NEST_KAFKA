import { INestApplication } from "@nestjs/common"
import { KafkaStreams } from "kafka-streams";

export class KafkaConfig {

  static keyValueMapperEtl(kafkaMessage) {
    const value = kafkaMessage.value.toString("utf8");
    const elements = value.toLowerCase().split(" ");
    return {
      key: elements[0],
      value: elements[1]
    };
  }

  static streams2() {

    const factory = new KafkaStreams({
      noptions: {
        "metadata.broker.list": "localhost:9092",
        "group.id": "kafka-streams-test-native",
        "client.id": "kafka-streams-test-name-native",
      }
    });
    
    const kstream = factory.getKStream("customer-events");
    kstream.from("customer-events").forEach(console.log);

    const ktable = factory.getKTable("customer-events", this.keyValueMapperEtl, null);

    kstream.start();

  }


  static async init(app: INestApplication): Promise<any> {

    this.streams2();

    // var consumer = app.get("CUSTOMER_CONSUMER");
    // await consumer.init();
  }
 
}