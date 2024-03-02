import { Component } from '@angular/core';

@Component({
  selector: "app-customer-transaction",
  templateUrl: "./customer-transaction.component.html",
  styleUrl: "./customer-transaction.component.scss",
})
export class CustomerTransactionComponent {
  customerTransaction = [
    {
      CreatedDate: "Jan 05,2024",
      Type: "Estimate",
      Id: "62041",
      Balance: "$123",
      Total: "$128",
      TransactionDate: "Jan 05,2024",
    },
    {
      CreatedDate: "Jan 05,2024",
      Type: "Invoice",
      Id: "62041",
      Balance: "$123",
      Total: "$128",
      TransactionDate: "Jan 05,2024",
    },
    {
      CreatedDate: "Jan 05,2024",
      Type: "Estimate",
      Id: "62041",
      Balance: "$123",
      Total: "$128",
      TransactionDate: "Jan 05,2024",
    },
  ];
}
