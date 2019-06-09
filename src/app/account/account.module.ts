import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StoreModule } from '@ngrx/store';
import { accountReducer, initialAccountState } from './+state/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './+state/account.effects';

@NgModule({
  declarations: [LoginComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    StoreModule.forFeature('account', accountReducer, { initialState: initialAccountState }),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountModule { }
