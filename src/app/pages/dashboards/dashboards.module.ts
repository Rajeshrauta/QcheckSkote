import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule,BsDropdownConfig} from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SimplebarAngularModule } from 'simplebar-angular';

import { DefaultComponent } from './default/default.component';
import { CreateEstimateComponent } from './create-estimate/create-estimate.component';
import { FreeItemComponent } from './create-estimate/sub-components/free-item/free-item.component';
import { PopoverComponent } from './create-estimate/sub-components/popover/popover.component';
import { HeadSectionComponent } from './create-estimate/sub-components/head-section/head-section.component';
import { MainGridComponent } from './create-estimate/sub-components/main-grid/main-grid.component';

@NgModule({
  declarations: [
    DefaultComponent,
    CreateEstimateComponent,
    FreeItemComponent,
    PopoverComponent,
    HeadSectionComponent,
    MainGridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    UIModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    ModalModule.forRoot(),
  ],
  providers: [BsDropdownConfig],
})
export class DashboardsModule {}
