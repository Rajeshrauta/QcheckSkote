import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-create-manual-estimate",
  templateUrl: "./create-manual-estimate.component.html",
  styleUrl: "./create-manual-estimate.component.scss",
})
export class CreateManualEstimateComponent {
  breadCrumbItems: Array<{}>;
  bsConfig: Partial<BsDatepickerConfig>;
  selectValue: string[];
  tableVisible: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.bsConfig = Object.assign({}, {
      // containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY',
      showWeekNumbers: false
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Estimate" },
      { label: "Create Manual", active: true },
    ];

    this.selectValue = ['Alaska Berry', 'Ronaldo Hawaii', 'Tony Stark', 'Natasha', 'Steve Jobs', 'Robin Hood', 'Tom', 'Jerry'];
  }

  toggleTableVisibility() {
    this.tableVisible = !this.tableVisible;
  }
}
