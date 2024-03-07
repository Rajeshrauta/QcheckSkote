import { Component } from '@angular/core';

@Component({
  selector: "app-edit-estimate",
  templateUrl: "./edit-estimate.component.html",
  styleUrl: "./edit-estimate.component.scss",
})
export class EditEstimateComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Estimate" },
      { label: "Edit", active: true },
    ];
  }
}
