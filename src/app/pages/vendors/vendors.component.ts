import { Component } from '@angular/core';

@Component({
  selector: "app-vendors",
  templateUrl: "./vendors.component.html",
  styleUrl: "./vendors.component.scss",
})
export class VendorsComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Vendors" },
      { label: "All", active: true },
    ];
  }
}
