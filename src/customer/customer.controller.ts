import { Controller } from "@nestjs/common";
import { CustomerService } from "./customer.service";

@Controller()
export class CustomerController {
    constructor(private service: CustomerService) { }
}