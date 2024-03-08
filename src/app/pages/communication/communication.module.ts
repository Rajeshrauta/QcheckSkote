import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationRoutingModule } from './communication-routing.module';
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { UIModule } from "src/app/shared/ui/ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SimplebarAngularModule } from "simplebar-angular";
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { WhatsappChatComponent } from './whatsapp-chat/whatsapp-chat.component';
import { EmailActivityComponent } from './email-activity/email-activity.component';

@NgModule({
  declarations: [WhatsappChatComponent, EmailActivityComponent],
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    ScrollToModule,
    UIModule,
    ReactiveFormsModule,
    FormsModule,
    SimplebarAngularModule,
    TabsModule,
    BsDropdownModule,
  ],
})
export class CommunicationModule {}
