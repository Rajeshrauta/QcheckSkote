import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDropzoneModule } from "ngx-dropzone";

import { UIModule } from "src/app/shared/ui/ui.module";
import { SettingRoutingModule } from "./setting-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { HangfireJobsComponent } from "./hangfire-jobs/hangfire-jobs.component";
import { ManageCompanyComponent } from "./manage-company/manage-company.component";
import { PricingRuleComponent } from "./pricing-rule/pricing-rule.component";
import { RackLocationComponent } from "./rack-location/rack-location.component";
import { ShippingCompanyComponent } from "./shipping-company/shipping-company.component";
import { SyncComponent } from "./sync/sync.component";
import { TabSettingComponent } from "./tab-setting/tab-setting.component";

@NgModule({
  declarations: [
    ProductListComponent,
    HangfireJobsComponent,
    ManageCompanyComponent,
    PricingRuleComponent,
    RackLocationComponent,
    ShippingCompanyComponent,
    SyncComponent,
    TabSettingComponent,
  ],
  imports: [CommonModule, SettingRoutingModule, UIModule, NgxDropzoneModule],
})
export class SettingModule {}
