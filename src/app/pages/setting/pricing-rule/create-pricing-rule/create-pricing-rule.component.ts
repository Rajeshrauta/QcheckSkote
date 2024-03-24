import { Component } from '@angular/core';

@Component({
  selector: 'app-create-pricing-rule',
  templateUrl: './create-pricing-rule.component.html',
  styleUrl: './create-pricing-rule.component.scss'
})
export class CreatePricingRuleComponent {
  breadCrumbItems: Array<{}>;
  selectValue: string[];


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Create Pricing Rule", active: true },
    ];

    this.selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];
  }
}
