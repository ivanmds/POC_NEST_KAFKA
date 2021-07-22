import { Injectable } from "@nestjs/common";
import { KafkaConnection } from "./kafka.connection";

@Injectable()
export class BusService {

    private kafka: KafkaConnection

    constructor(
        kafka: KafkaConnection) {
        this.kafka = kafka;
    }

    async publish(topic: string, message: any) {
        // TODO verifier if can use the same producer connect 
        const producer = this.kafka.getConnection().producer();
        await producer.connect()
        await producer.send({
            topic: topic,
            messages: [
                { value: message }
            ],
        });
    }
}