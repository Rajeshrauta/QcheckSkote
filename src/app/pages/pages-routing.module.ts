import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEstimateComponent } from './dashboards/create-estimate/create-estimate.component';


const routes: Routes = [
  { path: "", redirectTo: "dashboards", pathMatch: "full" },
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
