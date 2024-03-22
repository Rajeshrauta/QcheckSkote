import { Component } from '@angular/core';

@Component({
  selector: 'app-all-pricing-rule',
  templateUrl: './all-pricing-rule.component.html',
  styleUrl: './all-pricing-rule.component.scss'
})
export class AllPricingRuleComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Pricing Rule", active: true },
    ];
  }
}
