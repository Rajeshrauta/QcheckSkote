import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { CreateEstimateComponent } from './create-estimate/create-estimate.component';
CreateEstimateComponent

const routes: Routes = [
  {
    path: "",
    redirectTo: "tab-view",
    pathMatch: "full",
  },
  {
    path: "default",
    component: DefaultComponent,
  },
  {
    path: "tab-view",
    component: CreateEstimateComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
