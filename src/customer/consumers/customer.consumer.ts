import { ConsumerBase } from "src/shared/kafka/consumer.base";
import { KafkaConnection } from "src/shared/kafka/kafka.connection";

export class CustomerConsumer extends ConsumerBase {
   
    constructor(groupid: string, topic: string, kafka: KafkaConnection) {
        super(groupid, topic, kafka);
    }

    do(message: any) {
        console.log(message);
    }
}
