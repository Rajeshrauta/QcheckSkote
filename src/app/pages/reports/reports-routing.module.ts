import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerReportsComponent } from './customer-reports/customer-reports.component';
import { ItemReportsComponent } from './item-reports/item-reports.component';
import { RolloverReportsComponent } from './rollover-reports/rollover-reports.component';
import { NoOrderReportsComponent } from './no-order-reports/no-order-reports.component';


const routes: Routes = [
  {
    path: "customer-reports",
    redirectTo: "dispatch-route",
    pathMatch: "full",
  },
  {
    path: "customer-reports",
    component: CustomerReportsComponent,
  },
  {
    path: "item-reports",
    component: ItemReportsComponent,
  },
  {
    path: "rollover-reports",
    component: RolloverReportsComponent,
  },
  {
    path: "no-order-reports",
    component: NoOrderReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
