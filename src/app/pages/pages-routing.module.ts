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
  {
    path: "communication",
    loadChildren: () =>
      import("./communication/communication.module").then(
        (m) => m.CommunicationModule
      ),
  },
  {
    path: "vendors",
    loadChildren: () =>
      import("./vendors/vendors.module").then((m) => m.VendorsModule),
  },
  {
    path: "accounting",
    loadChildren: () =>
      import("./accounting/accounting.module").then((m) => m.AccountingModule),
  },
  {
    path: "products-and-services",
    loadChildren: () =>
      import("./products-and-services/products-and-services.module").then(
        (m) => m.ProductsAndServicesModule
      ),
  },
  {
    path: "reports",
    loadChildren: () =>
      import("./reports/reports.module").then((m) => m.ReportsModule),
  },
  { path: 'creditmemo', loadChildren: () => import('./credit-memo/credit-memo.module').then(m => m.CreditMemoModule) },
  { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
