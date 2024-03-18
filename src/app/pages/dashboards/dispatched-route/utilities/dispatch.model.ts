export interface DispatchModel {
  id: any;
  invoice : number;
  stop: number;
  customer: string;
  address: string;
  createdDate: string;
  dueDate: string;
  totalAmount: string;
  status: string;
  comment: string;
  shipping: string;
  driver: string;
  index:number;
}

export interface SearchResult {
  tables: DispatchModel[];
  total: number;
}