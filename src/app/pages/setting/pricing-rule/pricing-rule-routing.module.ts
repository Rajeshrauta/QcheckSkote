import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePricingRuleComponent } from './create-pricing-rule/create-pricing-rule.component';
import { EditPricingRuleComponent } from './edit-pricing-rule/edit-pricing-rule.component';
import { AllPricingRuleComponent } from './all-pricing-rule/all-pricing-rule.component';



const routes: Routes = [
  { path: '', component: AllPricingRuleComponent },
  { path: 'create', component: CreatePricingRuleComponent },
  { path: 'edit', component: EditPricingRuleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRuleRoutingModule { }
