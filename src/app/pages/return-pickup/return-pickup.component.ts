import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-return-pickup',
  templateUrl: './return-pickup.component.html',
  styleUrl: './return-pickup.component.scss'
})
export class ReturnPickupComponent {
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
      { label: "Return Pickup" },
      { label: "All", active: true },
    ];

    this.selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];
  }

  toggleTableVisibility() {
    this.tableVisible = !this.tableVisible;
  }
}
