// Table data
export interface tabSettingTable {
    tabname: string
    tabconf: string,
    printseq: number,
    image: string,
    hide:boolean,
}

// Search Data
export interface SearchResult {
    tables: tabSettingTable[];
    total: number;
}
