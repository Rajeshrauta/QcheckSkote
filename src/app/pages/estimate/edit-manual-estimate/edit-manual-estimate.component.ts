import { Component } from '@angular/core';

@Component({
  selector: "app-edit-manual-estimate",
  templateUrl: "./edit-manual-estimate.component.html",
  styleUrl: "./edit-manual-estimate.component.scss",
})
export class EditManualEstimateComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Estimate" },
      { label: "Edit Manual", active: true },
    ];
  }
}
