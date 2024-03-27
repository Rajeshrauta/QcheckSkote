import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EstimateDetailComponent } from './estimate-detail/estimate-detail.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
@NgModule({
  declarations: [EstimateDetailComponent,InvoiceDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule
  ],
  exports: [EstimateDetailComponent, InvoiceDetailComponent]
})
export class CustomModalModule { }
