import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: "app-rollover-reports",
  templateUrl: "./rollover-reports.component.html",
  styleUrl: "./rollover-reports.component.scss",
})
export class RolloverReportsComponent {
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
      { label: "Rollover", active: true },
    ];
  }
}
