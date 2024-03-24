import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-customer-reports",
  templateUrl: "./customer-reports.component.html",
  styleUrl: "./customer-reports.component.scss",
})
export class CustomerReportsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  reportForm: FormGroup;
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
      { label: "Reports" },
      { label: "Customer", active: true },
    ];

    this.reportForm = this.formBuilder.group({
      reportPeriod: ['today'],
      startDate: [new Date()],
      endDate: [new Date()]
    });

    this.selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];
  }


  updateDates(selectedPeriod: string): void {
    const today = new Date();
    let startDate: Date;
    let endDate: Date;

    switch (selectedPeriod) {
      case 'today':
        startDate = today;
        endDate = today;
        break;
      case 'thisweek':
        // Calculate start and end of the week
        const thisWeekStart = new Date(today);
        thisWeekStart.setDate(today.getDate() - today.getDay());
        startDate = new Date(thisWeekStart);
        // Calculate end of the current week (Saturday)
        const thisWeekEnd = new Date(today);
        thisWeekEnd.setDate(today.getDate() - today.getDay() + 6);
        endDate = new Date(thisWeekEnd);
        break;
      case 'thismonth':
        // Calculate start and end of the month
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case 'thisyear':
        // Calculate start and end of the year
        startDate = new Date(today.getFullYear(), 0, 1);
        endDate = new Date(today.getFullYear(), 11, 31);
        break;
      case 'lastweek':
        // Calculate start and end of last week
        const lastWeekStart = new Date(today);
        lastWeekStart.setDate(today.getDate() - today.getDay() - 7);
        startDate = new Date(lastWeekStart);
        // Calculate end of the previous week (Saturday)
        const lastWeekEnd = new Date(today);
        lastWeekEnd.setDate(today.getDate() - today.getDay() - 1);
        endDate = new Date(lastWeekEnd);
        break;
      case 'lastmonth':
        // Calculate start and end of last month
        const lastMonthStartDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        startDate = lastMonthStartDate;
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      case 'lastyear':
        // Calculate start and end of last year
        startDate = new Date(today.getFullYear() - 1, 0, 1);
        endDate = new Date(today.getFullYear() - 1, 11, 31);
        break;
      default:
        // Default to today if none of the cases match
        startDate = today;
        endDate = today;
        break;
    }

    // Update form control values
    this.reportForm.patchValue({
      startDate: startDate,
      endDate: endDate
    });
  }
}
