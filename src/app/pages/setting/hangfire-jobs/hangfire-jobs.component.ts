import { Component } from '@angular/core';

@Component({
  selector: "app-hangfire-jobs",
  templateUrl: "./hangfire-jobs.component.html",
  styleUrl: "./hangfire-jobs.component.scss",
})
export class HangfireJobsComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Hangfire Jobs", active: true },
    ];
  }
}
