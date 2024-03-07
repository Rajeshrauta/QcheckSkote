import { Component } from '@angular/core';

@Component({
  selector: "app-rack-location",
  templateUrl: "./rack-location.component.html",
  styleUrl: "./rack-location.component.scss",
})
export class RackLocationComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Rack Location", active: true },
    ];
  }
}
