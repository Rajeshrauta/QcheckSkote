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
}
