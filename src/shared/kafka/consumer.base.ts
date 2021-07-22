import { KafkaConnection } from "./kafka.connection"

export abstract class ConsumerBase {

    constructor(
        private groupid: string,
        private topic: string,
        private kafka: KafkaConnection) { }

    async init(): Promise<any> {
        const consumer = this.kafka.getConnection().consumer({ groupId: this.groupid })

        await consumer.connect()
        await consumer.subscribe({ topic: this.topic, fromBeginning: true })

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    partition,
                    offset: message.offset,
                    value: message.value.toString(),
                });

                this.do(JSON.parse(message.value.toString()));
            },
        })
    }

    abstract do(message: any);
}