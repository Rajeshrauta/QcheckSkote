import { Component } from '@angular/core';

@Component({
  selector: "app-create-credit-memo",
  templateUrl: "./create-credit-memo.component.html",
  styleUrl: "./create-credit-memo.component.scss",
})
export class CreateCreditMemoComponent {
  breadCrumbItems: Array<{}>;


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Credit Memo" },
      { label: "Create", active: true },
    ];
  }

  customerTransaction = [
    {
      Product: "HRFAP",
      Description: "Haldi ram frozen aloo paratha",
      UnitPrice: "$23",
      Qty: "33",
      Free: "3",
      QuantityOnHand: "24",
    },
    {
      Product: "HRFAP",
      Description: "Haldi ram frozen aloo paratha",
      UnitPrice: "$23",
      Qty: "33",
      Free: "3",
      QuantityOnHand: "24",
    },
    {
      Product: "HRFAP",
      Description: "Haldi ram frozen aloo paratha",
      UnitPrice: "$23",
      Qty: "33",
      Free: "3",
      QuantityOnHand: "24",
    },
  ];
}
