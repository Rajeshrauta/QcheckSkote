import { Component } from '@angular/core';

@Component({
  selector: "app-pending-orders",
  templateUrl: "./pending-orders.component.html",
  styleUrl: "./pending-orders.component.scss",
})
export class PendingOrdersComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dashboard" },
      { label: "Pending Orders", active: true },
    ];
  }
}
