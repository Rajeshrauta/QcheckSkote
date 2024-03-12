import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from "ngx-bootstrap/modal";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { UIModule } from "src/app/shared/ui/ui.module";
import { CustomerListComponent } from './sub-components/customer-list/customer-list.component';
import { CustomerTransactionComponent } from './sub-components/customer-transaction/customer-transaction.component';
import { CustomerInformationComponent } from './sub-components/customer-information/customer-information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerTransactionComponent,
    CustomerInformationComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ModalModule,
    UIModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule.forRoot(),
    NgbModule,
    BsDropdownModule.forRoot(),
  ],
})
export class CustomerModule {}
