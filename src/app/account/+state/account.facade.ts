import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AccountState } from './account.reducer';
import { AccountActions } from './account.actions';
import { accountQuery } from './account.selectors';
import { CreateAccountRequest } from '../models/create-account-request.interface';
import { LoginRequest } from '../models/login-request.interface';

@Injectable({
    providedIn: 'root'
})
export class AccountFacade {
    account$ = this.store.select(accountQuery.getAccount);
    user$ = this.store.select(accountQuery.getUser);
    isLoggedIn$ = this.store.select(accountQuery.getLoggedIn);

    constructor(private store: Store<AccountState>) { }

    login(req: LoginRequest) {
        this.store.dispatch(AccountActions.Login(req));
    }

    logout() {
        this.store.dispatch(AccountActions.Logout());
    }

    createAccount(req: CreateAccountRequest) {
        this.store.dispatch(AccountActions.CreateAccount({ req }));
    }

    getUser() {
        this.store.dispatch(AccountActions.GetUser());
    }
}