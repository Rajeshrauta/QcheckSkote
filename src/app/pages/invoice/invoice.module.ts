import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceLinkedWithEstimateComponent } from './invoice-linked-with-estimate/invoice-linked-with-estimate.component';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    CreateInvoiceComponent,
    EditInvoiceComponent,
    InvoiceLinkedWithEstimateComponent,
  ],
  imports: [
    CommonModule, 
    InvoiceRoutingModule, 
    UIModule, 
    BsDropdownModule, 
    ModalModule
  ]
})
export class InvoiceModule {}
