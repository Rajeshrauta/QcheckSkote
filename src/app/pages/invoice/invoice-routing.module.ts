import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceLinkedWithEstimateComponent } from './invoice-linked-with-estimate/invoice-linked-with-estimate.component';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "dispatch-route",
  //   pathMatch: "full",
  // },
  {
    path: "create",
    component: CreateInvoiceComponent,
  },
  {
    path: "edit",
    component: EditInvoiceComponent,
  },
  {
    path: "invoice-linked-with-estimate",
    component: InvoiceLinkedWithEstimateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
