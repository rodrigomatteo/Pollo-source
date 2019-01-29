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
    items: QuoteItem[] = [];

    addLine(id: number){
        let item = new QuoteItem();
        item.id = id;
        item.line = id;
        item.quantity = 0;
        item.unitPrice = 0;
        item.currency = "PEN";
        item.total = 0;
        
        this.items.push(item);
    }
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