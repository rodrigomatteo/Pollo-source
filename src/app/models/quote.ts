export class Quote{
    id: number;
    firstName: string;
    lastName: string;
    dateCreated: string;
    customerName: string;
    phone: string;
    email: string;
    address: string;
    country: string;
    city: string;
    state: string;
    items: QuoteItem[]
}

export class QuoteItem {
    id: number;
    line: number;
    productNo: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    currency: string;
    total: number
}