import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [!AuthGuard]
  },
  {
    path: 'createAccount',
    component: CreateAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
