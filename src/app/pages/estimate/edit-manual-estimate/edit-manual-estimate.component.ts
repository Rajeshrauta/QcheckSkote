import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-edit-manual-estimate",
  templateUrl: "./edit-manual-estimate.component.html",
  styleUrl: "./edit-manual-estimate.component.scss",
})
export class EditManualEstimateComponent {
  breadCrumbItems: Array<{}>;
  bsConfig: Partial<BsDatepickerConfig>;
  selectValue: string[];

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
      { label: "Edit Manual", active: true },
    ];

    this.selectValue = ['Alaska Berry', 'Ronaldo Hawaii', 'Tony Stark', 'Natasha', 'Steve Jobs', 'Robin Hood', 'Tom', 'Jerry'];
  }
}
