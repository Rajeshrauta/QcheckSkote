import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "dashboards", pathMatch: "full" },
  {
    path: "dashboards",
    loadChildren: () =>
      import("./dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },
  {
    path: "estimate",
    loadChildren: () =>
      import("./estimate/estimate.module").then((m) => m.EstimateModule),
  },
  {
    path: "customer",
    loadChildren: () =>
      import("./customer/customer.module").then((m) => m.CustomerModule),
  },
  {
    path: "setting",
    loadChildren: () =>
      import("./setting/setting.module").then((m) => m.SettingModule),
  },
  {
    path: "user-setup",
    loadChildren: () =>
      import("./user-setup/user-setup.module").then((m) => m.UserSetupModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
