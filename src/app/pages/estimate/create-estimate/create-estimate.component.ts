import { Component } from '@angular/core';

@Component({
  selector: "app-create-estimate",
  templateUrl: "./create-estimate.component.html",
  styleUrl: "./create-estimate.component.scss",
})
export class CreateEstimateComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Estimate" },
      { label: "Create", active: true },
    ];
  }
}
