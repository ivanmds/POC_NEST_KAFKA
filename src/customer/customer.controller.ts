import { Controller, Get } from "@nestjs/common";
import { BusService } from "../shared/kafka/bus.service";

@Controller('customers')
export class CustomerController {

    private bus: BusService;

    constructor(bus: BusService) { 
        this.bus = bus;
    }

    @Get()
    async getResult(): Promise<any> {
        await this.bus.publish("customer-events", "Olá");
    }
}