export class Sale{
    billingType: string;
    documentNo: string;
    customerName: string;
    description: string;
    documentDate: string;
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