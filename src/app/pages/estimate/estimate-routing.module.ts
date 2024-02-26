import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEstimateComponent } from './create-estimate/create-estimate.component';
import { CreateManualEstimateComponent } from './create-manual-estimate/create-manual-estimate.component';
import { EditEstimateComponent } from './edit-estimate/edit-estimate.component';
import { EditManualEstimateComponent } from './edit-manual-estimate/edit-manual-estimate.component';
import { FetchOrderComponent } from './fetch-order/fetch-order.component';
import { NewOrderReceivedComponent } from './new-order-received/new-order-received.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "create-estimate",
    pathMatch: "full",
  },
  {
    path: "create-estimate",
    component: CreateEstimateComponent,
  },
  {
    path: "create-manual-estimate",
    component: CreateManualEstimateComponent,
  },
  {
    path: "edit-estimate",
    component:EditEstimateComponent,
  },
  {
    path: "edit-manual-estimate",
    component: EditManualEstimateComponent,
  },
  {
    path:"fetch-order",
    component:FetchOrderComponent,
  },
  {
    path:"order-recieved",
    component:NewOrderReceivedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimateRoutingModule { }
