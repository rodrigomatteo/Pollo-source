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
    items: SaleItem[] = [];

    addLine(id: number){
        let item = new SaleItem();
        item.id = id;
        item.line = id;
        item.quantity = 0;
        item.unitPrice = 0;
        item.currency = "PEN";
        item.total = 0;
        
        this.items.push(item);
    }
}


export class SaleItem {
    id: number;
    line: number;
    productNo: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    currency: string;
    total: number
}