import { Component } from '@angular/core';

@Component({
  selector: "app-order-received",
  templateUrl: "./order-received.component.html",
  styleUrl: "./order-received.component.scss",
})
export class OrderReceivedComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dashboard" },
      { label: "Order Received", active: true },
    ];
  }
}
