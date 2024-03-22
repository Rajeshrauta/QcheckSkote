import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDropzoneModule } from "ngx-dropzone";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { UIModule } from "src/app/shared/ui/ui.module";
import { SettingRoutingModule } from "./setting-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { HangfireJobsComponent } from "./hangfire-jobs/hangfire-jobs.component";
import { ManageCompanyComponent } from "./manage-company/manage-company.component";
import { RackLocationComponent } from "./rack-location/rack-location.component";
import { ShippingCompanyComponent } from "./shipping-company/shipping-company.component";
import { SyncComponent } from "./sync/sync.component";
import { TabSettingComponent } from "./tab-setting/tab-setting.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PricingRuleModule } from "./pricing-rule/pricing-rule.module";

@NgModule({
  declarations: [
    ProductListComponent,
    HangfireJobsComponent,
    ManageCompanyComponent,
    RackLocationComponent,
    ShippingCompanyComponent,
    SyncComponent,
    TabSettingComponent,

  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    UIModule,
    NgxDropzoneModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    BsDatepickerModule,
  ],
})
export class SettingModule {}
