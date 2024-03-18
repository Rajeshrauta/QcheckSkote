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

import { DispatchRouteComponent } from './dispatch-route/dispatch-route.component';
import { DispatchedRouteComponent } from './dispatched-route/dispatched-route.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { OrderReceivedComponent } from './order-received/order-received.component';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    DispatchRouteComponent,
    DispatchedRouteComponent,
    PendingOrdersComponent,
    OrderReceivedComponent,
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
    PaginationModule,
    BsDatepickerModule
  ],
  providers: [BsDropdownConfig],
})
export class DashboardsModule {}
