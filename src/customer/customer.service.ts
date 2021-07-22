import { Injectable } from "@nestjs/common";
import { CustomerRepository } from "./customer.repository";

@Injectable()
export class CustomerService {
    constructor(private repository: CustomerRepository) { }

    get() {
        this.repository.get();
    }
}