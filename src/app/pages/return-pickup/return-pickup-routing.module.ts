import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnPickupComponent } from './return-pickup.component';

const routes: Routes = [{ path: '', component: ReturnPickupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnPickupRoutingModule { }
