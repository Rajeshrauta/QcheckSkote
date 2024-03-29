import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchRouteComponent } from './dispatch-route/dispatch-route.component';
import { OrderReceivedComponent } from './order-received/order-received.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { DispatchedRouteComponent } from './dispatched-route/dispatched-route.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "order-received",
    pathMatch: "full",
  },

  {
    path: "order-received",
    component: OrderReceivedComponent,
  },
  {
    path: "pending-orders",
    component: PendingOrdersComponent,
  },
  {
    path: "dispatch-route",
    component: DispatchRouteComponent,
  },
  {
    path: "dispatched-route",
    component: DispatchedRouteComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
