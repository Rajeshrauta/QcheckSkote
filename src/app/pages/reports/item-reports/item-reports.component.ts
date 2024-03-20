import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: "app-item-reports",
  templateUrl: "./item-reports.component.html",
  styleUrl: "./item-reports.component.scss",
})
export class ItemReportsComponent {
  breadCrumbItems: Array<{}>;

  bsConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.bsConfig = Object.assign({}, {
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Reports" },
      { label: "Item", active: true },
    ];
  }
}
