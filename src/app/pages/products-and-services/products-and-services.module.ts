import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from "src/app/shared/ui/ui.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";


import { ProductsAndServicesRoutingModule } from './products-and-services-routing.module';
import { ProductsAndServicesComponent } from './products-and-services.component';


@NgModule({
  declarations: [ProductsAndServicesComponent],
  imports: [
    CommonModule,
    ProductsAndServicesRoutingModule,
    UIModule,
    BsDropdownModule,
  ],
})
export class ProductsAndServicesModule {}
