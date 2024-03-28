import { Component } from '@angular/core';

@Component({
  selector: "app-fetch-order",
  templateUrl: "./fetch-order.component.html",
  styleUrl: "./fetch-order.component.scss",
})
export class FetchOrderComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Estimate" },
      { label: "Fetch Order", active: true },
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
