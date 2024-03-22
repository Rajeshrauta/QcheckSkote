import { Component } from '@angular/core';

@Component({
  selector: 'app-create-pricing-rule',
  templateUrl: './create-pricing-rule.component.html',
  styleUrl: './create-pricing-rule.component.scss'
})
export class CreatePricingRuleComponent {
  breadCrumbItems: Array<{}>;
  showTableBody: boolean = false;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Create Pricing Rule", active: true },
    ];
  }

  toggleTableBody() {
    this.showTableBody = !this.showTableBody;
  }
}
