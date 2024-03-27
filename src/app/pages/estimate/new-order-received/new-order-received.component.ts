import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-new-order-received",
  templateUrl: "./new-order-received.component.html",
  styleUrl: "./new-order-received.component.scss",
})
export class NewOrderReceivedComponent {
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
      { label: "New Order", active: true },
    ];

    this.selectValue = ['Alaska Berry', 'Ronaldo Hawaii', 'Tony Stark', 'Natasha', 'Steve Jobs', 'Robin Hood', 'Tom', 'Jerry'];
  }
}
