import { Component } from '@angular/core';

@Component({
  selector: "app-all-overdue",
  templateUrl: "./all-overdue.component.html",
  styleUrl: "./all-overdue.component.scss",
})
export class AllOverdueComponent {
  breadCrumbItems: Array<{}>;
  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Accounting" },
      { label: "All Overdue", active: true },
    ];
  }
}
