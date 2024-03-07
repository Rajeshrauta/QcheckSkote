import { Component } from '@angular/core';

@Component({
  selector: "app-new-order-received",
  templateUrl: "./new-order-received.component.html",
  styleUrl: "./new-order-received.component.scss",
})
export class NewOrderReceivedComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Estimate" },
      { label: "New Order", active: true },
    ];
  }
}
