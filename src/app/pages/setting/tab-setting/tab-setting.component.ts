import { Component } from '@angular/core';

@Component({
  selector: "app-tab-setting",
  templateUrl: "./tab-setting.component.html",
  styleUrl: "./tab-setting.component.scss",
})
export class TabSettingComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Tab Setting", active: true },
    ];
  }
}
