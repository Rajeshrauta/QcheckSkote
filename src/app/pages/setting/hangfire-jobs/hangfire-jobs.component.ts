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


  hangFireJobs = [
    {
      id: "HJ0001",
      jobName: "Update customer status to deleted",
    },
    {
      id: "HJ0002",
      jobName: "Sync all entities from begining",
    },
    {
      id: "HJ0003",
      jobName: "Update customer open and overdue balance",
    },
    {
      id: "HJ0004",
      jobName: "Another hangfire job",
    },
    {
      id: "HJ0005",
      jobName: "Another hangfire job",
    },
    {
      id: "HJ0006",
      jobName: "Another hangfire job",
    },
    ]
}
