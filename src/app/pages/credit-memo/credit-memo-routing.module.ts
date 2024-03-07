import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCreditMemoComponent } from './create-credit-memo/create-credit-memo.component';
import { EditCreditMemoComponent } from './edit-credit-memo/edit-credit-memo.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "dispatch-route",
    pathMatch: "full",
  },

  {
    path: "create",
    component: CreateCreditMemoComponent,
  },
  {
    path: "edit",
    component: EditCreditMemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditMemoRoutingModule { }
