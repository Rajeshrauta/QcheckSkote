import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: "app-customer-reports",
  templateUrl: "./customer-reports.component.html",
  styleUrl: "./customer-reports.component.scss",
})
export class CustomerReportsComponent {
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
      { label: "Customer", active: true },
    ];
  }
}
