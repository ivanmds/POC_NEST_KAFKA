import { ApiProperty } from "@nestjs/swagger";

export class AddressDto {

    @ApiProperty()
    addressLine: string;

    @ApiProperty()
    number: string;

    @ApiProperty()
    zipCode: string;

    @ApiProperty()
    neighborhood: string;

    @ApiProperty()
    country: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    complement: string;
}

export class EmailDto {

    @ApiProperty()
    email: string;
}


export class CustomerDto {
    @ApiProperty()
    companyKey: string;

    @ApiProperty()
    documentNumber: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    motherName: string;

    @ApiProperty({ type: AddressDto })
    address: AddressDto;

    @ApiProperty({ type: EmailDto })
    email: EmailDto;
}