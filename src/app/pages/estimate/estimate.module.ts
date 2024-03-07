import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from "src/app/shared/ui/ui.module";

import { EstimateRoutingModule } from './estimate-routing.module';
import { CreateEstimateComponent } from '../estimate/create-estimate/create-estimate.component';
import { FreeItemComponent } from './create-estimate/sub-components/free-item/free-item.component';
import { MainGridComponent } from './create-estimate/sub-components/main-grid/main-grid.component';
import { HeadSectionComponent } from './create-estimate/sub-components/head-section/head-section.component';
import { PopoverComponent } from './create-estimate/sub-components/popover/popover.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEstimateComponent } from './edit-estimate/edit-estimate.component';
import { EditManualEstimateComponent } from './edit-manual-estimate/edit-manual-estimate.component';
import { CreateManualEstimateComponent } from './create-manual-estimate/create-manual-estimate.component';
import { NewOrderReceivedComponent } from './new-order-received/new-order-received.component';
import { FetchOrderComponent } from './fetch-order/fetch-order.component';


@NgModule({
  declarations: [
    CreateEstimateComponent,
    FreeItemComponent,
    MainGridComponent,
    HeadSectionComponent,
    PopoverComponent,
    EditEstimateComponent,
    EditManualEstimateComponent,
    CreateManualEstimateComponent,
    NewOrderReceivedComponent,FetchOrderComponent
  ],
  imports: [CommonModule, EstimateRoutingModule, ReactiveFormsModule, UIModule],
})
export class EstimateModule {}
