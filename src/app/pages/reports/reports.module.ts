import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from "src/app/shared/ui/ui.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ReportsRoutingModule } from './reports-routing.module';
import { CustomerReportsComponent } from './customer-reports/customer-reports.component';
import { ItemReportsComponent } from './item-reports/item-reports.component';
import { NoOrderReportsComponent } from './no-order-reports/no-order-reports.component';
import { RolloverReportsComponent } from './rollover-reports/rollover-reports.component';


@NgModule({
  declarations: [
    CustomerReportsComponent,
    ItemReportsComponent,
    NoOrderReportsComponent,
    RolloverReportsComponent,
  ],
  imports: [CommonModule, ReportsRoutingModule, UIModule, BsDropdownModule, BsDatepickerModule],
})
export class ReportsModule {}
