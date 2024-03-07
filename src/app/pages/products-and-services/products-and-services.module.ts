import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsAndServicesRoutingModule } from './products-and-services-routing.module';
import { ProductsAndServicesComponent } from './products-and-services.component';


@NgModule({
  declarations: [
    ProductsAndServicesComponent
  ],
  imports: [
    CommonModule,
    ProductsAndServicesRoutingModule
  ]
})
export class ProductsAndServicesModule { }
