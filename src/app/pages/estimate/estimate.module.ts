import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimateRoutingModule } from './estimate-routing.module';
import { CreateEstimateComponent } from '../estimate/create-estimate/create-estimate.component';
import { FreeItemComponent } from './create-estimate/sub-components/free-item/free-item.component';
import { MainGridComponent } from './create-estimate/sub-components/main-grid/main-grid.component';
import { HeadSectionComponent } from './create-estimate/sub-components/head-section/head-section.component';
import { PopoverComponent } from './create-estimate/sub-components/popover/popover.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateEstimateComponent,
    FreeItemComponent,
    MainGridComponent,
    HeadSectionComponent,
    PopoverComponent
  ],
  imports: [CommonModule, EstimateRoutingModule,ReactiveFormsModule],
})
export class EstimateModule {}
