import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';
import { CreateEstimateComponent } from './dashboards/create-estimate/create-estimate.component';


const routes: Routes = [
  // { path: "", redirectTo: "dashboards" },
  {
    path: "",
    component: CreateEstimateComponent
  },
  { path: 'dashboards', component: CreateEstimateComponent },
  {
    path: "dashboards",
    loadChildren: () =>
      import("./dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
