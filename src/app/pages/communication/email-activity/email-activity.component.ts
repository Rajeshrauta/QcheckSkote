import { Component } from "@angular/core";

@Component({
  selector: "app-email-activity",
  templateUrl: "./email-activity.component.html",
  styleUrl: "./email-activity.component.scss",
})
export class EmailActivityComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Communication" },
      { label: "Email Activity", active: true },
    ];
  }
}
