import { Component } from '@angular/core';

@Component({
  selector: "app-manage-company",
  templateUrl: "./manage-company.component.html",
  styleUrl: "./manage-company.component.scss",
})
export class ManageCompanyComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Manage Company", active: true },
    ];
  }
}
