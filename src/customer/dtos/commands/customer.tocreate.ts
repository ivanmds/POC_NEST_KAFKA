import { OmitType } from "@nestjs/swagger";
import { CustomerDto } from "../customer.dto";

export class CustomerToCreate extends OmitType(CustomerDto, ['id'] as const) { }