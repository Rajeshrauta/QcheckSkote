import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOverdueComponent } from './all-overdue/all-overdue.component';
import { TodayOverdueComponent } from './today-overdue/today-overdue.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "all-overdue",
    pathMatch: "full",
  },

  {
    path: "all-overdue",
    component: AllOverdueComponent,
  },
  {
    path: "today-overdue",
    component: TodayOverdueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
