import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { AccountActions, AccountActionsType } from './account.actions';
import { AccountService } from '../account.service';
import { StorageService } from 'src/app/core/storage/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AccountEffects {

    constructor(private actions: Actions<AccountActionsType>,
        private service: AccountService,
        private storage: StorageService,
        private router: Router) { }

    @Effect()
    login$ = this.actions
        .pipe(
            ofType(AccountActions.Login.type),
            switchMap(({ email, password }) => this.service.login({ email, password })
                .pipe(
                    map(res => AccountActions.LoginSuccess(res)),
                    catchError(err => of(AccountActions.LoginFailure({ reason: err.error })))
                )
            )
        );

    @Effect({ dispatch: false })
    loginSuccess$ = this.actions
        .pipe(
            ofType(AccountActions.LoginSuccess.type, AccountActions.CreateAccountSuccess.type),
            tap(user => {
                this.storage.save('token', user.token);
                this.router.navigateByUrl('/journal');
            })
        );

    @Effect()
    createAccount$ = this.actions
        .pipe(
            ofType(AccountActions.CreateAccount.type),
            switchMap(({ req }) => this.service.createAccount(req)
                .pipe(
                    map(res => AccountActions.CreateAccountSuccess(res)),
                    catchError(err => of(AccountActions.CreateAccountFailure({ reason: err.error })))
                )
            )
        );

    @Effect({ dispatch: false })
    logout$ = this.actions
        .pipe(
            ofType(AccountActions.Logout.type),
            switchMap(() => this.service.logout()),
            tap(() => {
                this.storage.destroy('token');
                this.router.navigateByUrl('/login');
            })
        );

    @Effect()
    getUser$ = this.actions
        .pipe(
            ofType(AccountActions.GetUser.type),
            switchMap(() => this.service.getUser()
                .pipe(
                    map(user => AccountActions.GetUserSuccess({ user })),
                    catchError(err => of(AccountActions.GetUserFailure(err)))
                )
            )
        )
}