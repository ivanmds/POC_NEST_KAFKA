import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { ApiHeader, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BusService } from "../shared/kafka/bus.service";
import { CustomerCreated } from "./dtos/customer.created";
import { CustomerDto } from "./dtos/customer.dto";

@ApiTags('customers')
@Controller('customers')
export class CustomerController {

    private bus: BusService;

    constructor(bus: BusService) {
        this.bus = bus;
    }

    @Get(':id')
    @ApiHeader({ name: 'x-correlation', description: 'id to correlation process' })
    @ApiResponse({ status: 200, description: 'success' })
    @ApiResponse({ status: 400, description: 'not found' })
    async get(@Param('id') id: string): Promise<CustomerDto> {
        await this.bus.publish("customer-events", "Olá");

        throw new NotFoundException('Customer not found');
    }

    @Post()
    async post(@Body() customer: CustomerDto): Promise<CustomerCreated> {


        return null;
    }
}