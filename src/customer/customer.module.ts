import { Module } from "@nestjs/common";
import { CustomerController } from "./customer.controller";
import { CustomerConsumer } from "./consumers/customer.consumer";
import { KafkaConnection } from "../shared/kafka/kafka.connection";
import { BusService } from "../shared/kafka/bus.service";

var customerConsumerProvider = {
    provide: "CUSTOMER_CONSUMER",
    inject: [KafkaConnection],
    useFactory: async (kafka: KafkaConnection) => {
        return new CustomerConsumer(
            "customer-consumer",
            "customer-events",
             kafka);
    }
};

@Module({
    controllers: [CustomerController],
    providers: [KafkaConnection,BusService, customerConsumerProvider]
})
export class CustomerModule { }