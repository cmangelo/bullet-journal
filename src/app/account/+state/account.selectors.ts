import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Account } from './account.reducer';

export const getAccount = createFeatureSelector<Account>('account');
export const getLoggedIn = createSelector(getAccount, (account: Account) => account.loggedIn);
export const getUser = createSelector(getAccount, (account: Account) => account.user);
export const getError = createSelector(getAccount, (account: Account) => account.error);
export const getLoading = createSelector(getAccount, (account: Account) => account.loading)

export const accountQuery = {
    getAccount,
    getLoggedIn,
    getUser,
    getError,
    getLoading
};
