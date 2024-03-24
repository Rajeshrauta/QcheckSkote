import { Component } from '@angular/core';

@Component({
  selector: "app-sync",
  templateUrl: "./sync.component.html",
  styleUrl: "./sync.component.scss",
})
export class SyncComponent {
  breadCrumbItems: Array<{}>;
  selectedTable: string = "entitySyncDetails";

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Sync", active: true },
    ];
  }

  selectTable(table: string) {
    this.selectedTable = table;
  }
}
