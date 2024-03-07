import { Component } from '@angular/core';

@Component({
  selector: "app-shipping-company",
  templateUrl: "./shipping-company.component.html",
  styleUrl: "./shipping-company.component.scss",
})
export class ShippingCompanyComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Shipping Company", active: true },
    ];
  }
}
