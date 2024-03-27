import { Component } from '@angular/core';

@Component({
  selector: "app-invoice-linked-with-estimate",
  templateUrl: "./invoice-linked-with-estimate.component.html",
  styleUrl: "./invoice-linked-with-estimate.component.scss",
})
export class InvoiceLinkedWithEstimateComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Invoice" },
      { label: "Linked With Estimate", active: true },
    ];
  }

  print() {
    window.print();
  }
}
