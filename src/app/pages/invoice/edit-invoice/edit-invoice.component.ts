import { Component } from '@angular/core';

@Component({
  selector: "app-edit-invoice",
  templateUrl: "./edit-invoice.component.html",
  styleUrl: "./edit-invoice.component.scss",
})
export class EditInvoiceComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Invoice" },
      { label: "Edit", active: true },
    ];
  }



  invoiceTransaction = [
    {
      Product: "HRFAP",
      Description: "Haldi ram frozen aloo paratha",
      UnitPrice: "$23",
      pullQty: "33",
      orderQty: "35",
      QuantityOnHand: "24",
    },
    {
      Product: "HRFAP",
      Description: "Haldi ram frozen aloo paratha",
      UnitPrice: "$23",
      pullQty: "25",
      orderQty: "65",
      QuantityOnHand: "24",
    },
    {
      Product: "HRFAP",
      Description: "Haldi ram frozen aloo paratha",
      UnitPrice: "$23",
      pullQty: "85",
      orderQty: "65",
      QuantityOnHand: "24",
    },
  ];
}
