import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { ApiHeader, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BusService } from "../shared/kafka/bus.service";
import { CustomerCreated } from "./dtos/events/customer.created";
import { CustomerToCreate } from "./dtos/commands/customer.tocreate";
import { CustomerListed } from "./dtos/events/customer.listed";
import { v4 as uuidv4 } from 'uuid';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {

    private bus: BusService;

    constructor(bus: BusService) {
        this.bus = bus;
    }

    @Get(':id')
    @ApiHeader({ name: 'x-correlation', description: 'id to correlation process' })
    @ApiResponse({ status: 200, description: 'success', type: CustomerListed })
    @ApiResponse({ status: 400, description: 'not found' })
    async get(@Param('id') id: string): Promise<CustomerListed> {
        //await this.bus.publish("customer-events", "Olá");

        throw new NotFoundException('Customer not found');
    }

    @Post()
    @ApiResponse({ status: 201, description: 'created',  type: CustomerCreated })
    async post(@Body() customer: CustomerToCreate): Promise<CustomerCreated> {
        
        var customerCreated = new CustomerCreated();
        Object.assign(customerCreated, customer);
        customerCreated.id = uuidv4();

        await this.bus.publish("customer-events", customerCreated);

        return customerCreated;
    }
}