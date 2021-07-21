import { CustomerRepository } from "./customer.repository";

export class CustomerService {
    constructor(private repository: CustomerRepository) { }
}