// Table data
export interface ShippingCompanyTable {
    companyname: string
    desc: string,
}

// Search Data
export interface SearchResult {
    tables: ShippingCompanyTable[];
    total: number;
}
