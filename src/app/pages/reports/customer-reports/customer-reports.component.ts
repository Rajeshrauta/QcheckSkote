import { Component } from '@angular/core';

@Component({
  selector: "app-customer-reports",
  templateUrl: "./customer-reports.component.html",
  styleUrl: "./customer-reports.component.scss",
})
export class CustomerReportsComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Reports" },
      { label: "Customer", active: true },
    ];
  }
}
