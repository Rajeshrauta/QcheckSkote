import { Component } from '@angular/core';

@Component({
  selector: "app-create-manual-estimate",
  templateUrl: "./create-manual-estimate.component.html",
  styleUrl: "./create-manual-estimate.component.scss",
})
export class CreateManualEstimateComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Estimate" },
      { label: "Create Manual", active: true },
    ];
  }
}
