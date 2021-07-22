import { Module } from "@nestjs/common";
import { KafkaConnection } from "src/shared/kafka/kafka.connection";
import { BusService } from "../shared/kafka/bus.service";
import { CustomerConsumer } from "./consumers/customer.consumer";
import { CustomerController } from "./customer.controller";
import { CustomerRepository } from "./customer.repository";
import { CustomerService } from "./customer.service";

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
    providers: [CustomerRepository, CustomerService, KafkaConnection, BusService, customerConsumerProvider]
})
export class CustomerModule { }