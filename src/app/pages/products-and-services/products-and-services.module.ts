import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from "src/app/shared/ui/ui.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { ProductsAndServicesRoutingModule } from './products-and-services-routing.module';
import { ProductsAndServicesComponent } from './products-and-services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvancedSortableDirective } from './utilities/advanced-sortable.directive';

@NgModule({
  declarations: [ProductsAndServicesComponent,AdvancedSortableDirective],
  imports: [
    CommonModule,
    ProductsAndServicesRoutingModule,
    UIModule,
    PaginationModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ProductsAndServicesModule {}
