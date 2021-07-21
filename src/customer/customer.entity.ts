export class Customer {
    id: string;
    companyKey: string;
    documentNumber: string;
    name: string;
    motherName: string;
    address: Address;
    email: Email;
}


export class Address {
    addressLine: string;
    number: string;
    zipCode: string;
    neighborhood: string;
    country: string;
    state: string;
    complement: string;
}

export class Email {
    email: string;
}