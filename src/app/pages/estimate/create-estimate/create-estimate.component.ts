import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { FreeItemComponent } from '../create-estimate/sub-components/free-item/free-item.component';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "app-create-estimate",
  templateUrl: "./create-estimate.component.html",
  styleUrl: "./create-estimate.component.scss",
})
export class CreateEstimateComponent {
  breadCrumbItems: Array<{}>;
  selectValue: string[];
  tableVisible: boolean = false;
  bsConfig: Partial<BsDatepickerConfig>;


  constructor(private fb: FormBuilder) {
    this.bsConfig = Object.assign({}, {
      // containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY',
      showWeekNumbers: false
    });
  }


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Estimate" },
      { label: "Create", active: true },
    ];

    this.selectValue = ['Alaska Berry', 'Ronaldo Hawaii', 'Tony Stark', 'Natasha', 'Steve Jobs', 'Robin Hood', 'Tom', 'Jerry'];
  }

  toggleTableVisibility() {
    this.tableVisible = !this.tableVisible;
  }
}
