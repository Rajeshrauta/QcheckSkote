import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSetupRoutingModule } from './user-setup-routing.module';
import { UserSetupComponent } from './user-setup.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { UIModule } from 'src/app/shared/ui/ui.module';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { UiSwitchModule } from "ngx-ui-switch";

@NgModule({
  declarations: [UserSetupComponent],
  imports: [
    CommonModule,
    UserSetupRoutingModule,
    ModalModule,
    UIModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule,
    UiSwitchModule,
    BsDropdownModule,
  ],
})
export class UserSetupModule {}
