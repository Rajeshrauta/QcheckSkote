import { Component } from '@angular/core';

@Component({
  selector: "app-pricing-rule",
  templateUrl: "./pricing-rule.component.html",
  styleUrl: "./pricing-rule.component.scss",
})
export class PricingRuleComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Pricing Rule", active: true },
    ];
  }
}
