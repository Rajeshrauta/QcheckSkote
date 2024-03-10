// Table data
export interface Table {
    // name: string;
    // position: string;
    // office: string;
    // age: string;
    // date: string;
    // salary: string;
    name: string;
    code: string;
    sku: string;
    desc: string;
    price: string;
    qtyinhand: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
