import { Component } from '@angular/core';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrl: './accounting.component.scss'
})
export class AccountingComponent {
  breadCrumbItems: Array<{}>;
  selectedTable: string = "todayOverdue";


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Accounting" },
      { label: "All", active: true },
    ];
  }

  selectTable(table: string) {
    this.selectedTable = table;
  }
}
