import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditMemoRoutingModule } from './credit-memo-routing.module';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { CreateCreditMemoComponent } from './create-credit-memo/create-credit-memo.component';
import { EditCreditMemoComponent } from './edit-credit-memo/edit-credit-memo.component';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [CreateCreditMemoComponent, EditCreditMemoComponent],
  imports: [
    CommonModule, 
    CreditMemoRoutingModule, 
    UIModule, 
    BsDropdownModule, 
    ReactiveFormsModule, 
    FormsModule,
    ModalModule
  ],
})
export class CreditMemoModule { }
