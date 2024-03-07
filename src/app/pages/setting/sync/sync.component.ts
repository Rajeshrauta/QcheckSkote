import { Component } from '@angular/core';

@Component({
  selector: "app-sync",
  templateUrl: "./sync.component.html",
  styleUrl: "./sync.component.scss",
})
export class SyncComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Sync", active: true },
    ];
  }
}
