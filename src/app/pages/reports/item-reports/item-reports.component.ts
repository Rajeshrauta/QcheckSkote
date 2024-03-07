import { Component } from '@angular/core';

@Component({
  selector: "app-item-reports",
  templateUrl: "./item-reports.component.html",
  styleUrl: "./item-reports.component.scss",
})
export class ItemReportsComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Reports" },
      { label: "Item", active: true },
    ];
  }
}
