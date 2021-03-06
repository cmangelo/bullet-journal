import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { accountReducer, initialAccountState } from './+state/account.reducer';
import { AccountEffects } from './+state/account.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AccountRoutingModule,
    NgbPopoverModule,
    StoreModule.forFeature('account', accountReducer, { initialState: initialAccountState }),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountModule { }
