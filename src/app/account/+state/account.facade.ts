import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AccountState } from './account.reducer';
import { AccountActions } from './account.actions';
import { accountQuery } from './account.selectors';

@Injectable({
    providedIn: 'root'
})
export class AccountFacade {
    account$ = this.store.select(accountQuery.getAccount);
    user$ = this.store.select(accountQuery.getUser);
    isLoggedIn$ = this.store.select(accountQuery.getLoggedIn);

    constructor(private store: Store<AccountState>) { }

    login(email: string, password: string) {
        this.store.dispatch(AccountActions.Login({ email, password }));
    }

    logout() {
        this.store.dispatch(AccountActions.Logout());
    }

    createAccount(name: string, email: string, password: string) {
        this.store.dispatch(AccountActions.CreateAccount({ name, email, password }));
    }

    getUser() {
        this.store.dispatch(AccountActions.GetUser());
    }
}