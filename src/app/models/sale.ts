export class Sale{
    id: number;
    billingType: string;
    documentNo: string;
    customerName: string;
    description: string;
    documentDate: string;
    documentDue: string;
    term: string;
    currency: string;
    items: SaleItem[]
}

export class SaleItem {
    line: number;
    productNo: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    currency: string;
    total: number
}