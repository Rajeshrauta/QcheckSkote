import { Component } from '@angular/core';

@Component({
  selector: "app-today-overdue",
  templateUrl: "./today-overdue.component.html",
  styleUrl: "./today-overdue.component.scss",
})
export class TodayOverdueComponent {
  breadCrumbItems: Array<{}>;
  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Accounting" },
      { label: "Today Overdue", active: true },
    ];
  }
}
