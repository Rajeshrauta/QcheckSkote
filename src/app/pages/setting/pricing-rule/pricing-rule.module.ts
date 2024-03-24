import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { UIModule } from "src/app/shared/ui/ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgSelectModule } from '@ng-select/ng-select';

import { PricingRuleRoutingModule } from './pricing-rule-routing.module';
import { CreatePricingRuleComponent } from './create-pricing-rule/create-pricing-rule.component';
import { EditPricingRuleComponent } from './edit-pricing-rule/edit-pricing-rule.component';
import { AllPricingRuleComponent } from './all-pricing-rule/all-pricing-rule.component';


@NgModule({
  declarations: [
    CreatePricingRuleComponent,
    EditPricingRuleComponent,
    AllPricingRuleComponent
  ],
  imports: [
    CommonModule,
    PricingRuleRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    UIModule, 
    BsDropdownModule,
    ModalModule,
    NgSelectModule
  ]
})
export class PricingRuleModule { }
