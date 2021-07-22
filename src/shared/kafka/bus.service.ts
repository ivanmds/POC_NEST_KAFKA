import { Injectable } from "@nestjs/common";
import { KafkaConnection } from "./kafka.connection";

@Injectable()
export class BusService {

    constructor(
        private topic: string,
        private kafka: KafkaConnection) { }

    async publish(message: any) {
        // TODO verifier if can use the same producer connect 
        const producer = this.kafka.getConnection().producer();
        await producer.connect()
        await producer.send({
            topic: this.topic,
            messages: [
                { value: message }
            ],
        });
    }
}