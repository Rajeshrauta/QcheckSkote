import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-pricing-rule',
  templateUrl: './edit-pricing-rule.component.html',
  styleUrl: './edit-pricing-rule.component.scss'
})
export class EditPricingRuleComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Edit Pricing Rule", active: true },
    ];
  }
}
