// Table data
export interface Table {
    type: string;
    createddate: string;
    id: string;
    balance: string;
    transactiondate: string;
    Comments: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
