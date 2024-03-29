import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SimplebarAngularModule } from "simplebar-angular";

@NgModule({
  declarations: [VendorsComponent],
  imports: [CommonModule, VendorsRoutingModule, UIModule, BsDropdownModule, SimplebarAngularModule],
})
export class VendorsModule {}
