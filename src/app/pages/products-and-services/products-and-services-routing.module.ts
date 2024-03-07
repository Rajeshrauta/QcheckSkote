import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAndServicesComponent } from './products-and-services.component';

const routes: Routes = [{ path: '', component: ProductsAndServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsAndServicesRoutingModule { }
