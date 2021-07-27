import { OmitType } from "@nestjs/swagger";
import { CustomerDto } from "../dtos/customer.dto";

export class CustomerToCreate extends OmitType(CustomerDto, ['id'] as const) { }