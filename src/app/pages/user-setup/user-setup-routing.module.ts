import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSetupComponent } from './user-setup.component';

const routes: Routes = [{ path: '', component: UserSetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSetupRoutingModule { }
