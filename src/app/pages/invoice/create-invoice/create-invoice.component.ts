import { Component } from '@angular/core';

@Component({
  selector: "app-create-invoice",
  templateUrl: "./create-invoice.component.html",
  styleUrl: "./create-invoice.component.scss",
})
export class CreateInvoiceComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Invoice" },
      { label: "Create", active: true },
    ];
  }
}
