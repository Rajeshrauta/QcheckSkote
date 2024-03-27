import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnPickupRoutingModule } from './return-pickup-routing.module';
import { ReturnPickupComponent } from './return-pickup.component';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ReturnPickupComponent
  ],
  imports: [
    CommonModule,
    ReturnPickupRoutingModule,
    UIModule,
    BsDatepickerModule,
    ReactiveFormsModule,
    BsDropdownModule,
    ModalModule,NgSelectModule
  ]
})
export class ReturnPickupModule { }
