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
}
