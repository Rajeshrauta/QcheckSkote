import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from "src/app/shared/ui/ui.module";

import { AccountingRoutingModule } from './accounting-routing.module';
import { AllOverdueComponent } from './all-overdue/all-overdue.component';
import { TodayOverdueComponent } from './today-overdue/today-overdue.component';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

@NgModule({
  declarations: [AllOverdueComponent, TodayOverdueComponent],
  imports: [CommonModule, AccountingRoutingModule, UIModule, BsDropdownModule],
})
export class AccountingModule {}
