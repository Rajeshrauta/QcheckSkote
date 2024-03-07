import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmailActivityComponent } from "./email-activity/email-activity.component";
import { WhatsappChatComponent } from "./whatsapp-chat/whatsapp-chat.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "email-activity",
    pathMatch: "full",
  },
  { path: "email-activity", component: EmailActivityComponent },
  { path: "whatsapp-chat", component: WhatsappChatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicationRoutingModule {}
