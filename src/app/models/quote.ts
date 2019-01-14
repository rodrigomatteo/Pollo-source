export class Quote{
    firstName: string;
    lastName: string;
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
    line: number;
    productNo: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    currency: string;
    total: number
}