import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { TabSettingComponent } from './tab-setting/tab-setting.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { SyncComponent } from './sync/sync.component';
import { HangfireJobsComponent } from './hangfire-jobs/hangfire-jobs.component';
import { ShippingCompanyComponent } from './shipping-company/shipping-company.component';
import { RackLocationComponent } from './rack-location/rack-location.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "tab-setting",
    pathMatch: "full",
  },
  {
    path: "tab-setting",
    component: TabSettingComponent,
  },
  {
    path: "product-list",
    component: ProductListComponent,
  },
  {
    path: "manage-company",
    component: ManageCompanyComponent,
  },
  {
    path: "sync",
    component: SyncComponent,
  },
  {
    path: "hangfire-jobs",
    component: HangfireJobsComponent,
  },
  {
    path: "shipping-company",
    component: ShippingCompanyComponent,
  },
  {
    path: "rack-location",
    component: RackLocationComponent,
  },
  { path: 'pricing-rule', 
        loadChildren: () => import('./pricing-rule/pricing-rule.module')
        .then(m => m.PricingRuleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
