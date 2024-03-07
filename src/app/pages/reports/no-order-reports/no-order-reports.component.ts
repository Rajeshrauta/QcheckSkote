import { Component } from '@angular/core';

@Component({
  selector: "app-no-order-reports",
  templateUrl: "./no-order-reports.component.html",
  styleUrl: "./no-order-reports.component.scss",
})
export class NoOrderReportsComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Reports" },
      { label: "No Order", active: true },
    ];
  }
}
