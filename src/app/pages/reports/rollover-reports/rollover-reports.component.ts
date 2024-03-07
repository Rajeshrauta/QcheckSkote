import { Component } from '@angular/core';

@Component({
  selector: "app-rollover-reports",
  templateUrl: "./rollover-reports.component.html",
  styleUrl: "./rollover-reports.component.scss",
})
export class RolloverReportsComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Reports" },
      { label: "Rollover", active: true },
    ];
  }
}
