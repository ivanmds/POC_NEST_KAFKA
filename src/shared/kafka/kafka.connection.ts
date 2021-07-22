import { Injectable } from "@nestjs/common";
import { Kafka } from "kafkajs";

@Injectable()
export class KafkaConnection {

    private kafka: Kafka;

    constructor() {
        this.kafka = new Kafka({
            clientId: 'my-app',
            brokers: ['localhost:9092']
        });
    }

    getConnection(): Kafka {
        return this.kafka;
    }
}