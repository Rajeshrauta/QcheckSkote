import { Component } from '@angular/core';

@Component({
  selector: "app-products-and-services",
  templateUrl: "./products-and-services.component.html",
  styleUrl: "./products-and-services.component.scss",
})
export class ProductsAndServicesComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Product & Services" },
      { label: "All", active: true },
    ];
  }
}
