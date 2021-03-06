import { User } from "src/app/shared/models/user.interface";

import { AccountActionsType, AccountActions } from './account.actions';

export interface Account {
    loggedIn: boolean;
    user: User;
    status: Status;
    error: string;
    loading: boolean;
}

export interface AccountState {
    readonly account: Account;
}

export type Status = 'INIT' | 'IN_PROGRESS';

export const initialAccountState: Account = {
    loggedIn: false,
    status: 'INIT',
    user: {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        createdAt: null,
        updatedAt: null
    },
    error: '',
    loading: false
}

export function accountReducer(state: Account, action: AccountActionsType): Account {
    switch (action.type) {
        case AccountActions.GetUserSuccess.type:
            return {
                ...state,
                loggedIn: true,
                user: action.user,
                error: '',
                loading: false
            };
        case AccountActions.GetUserFailure.type:
            return initialAccountState;
        case AccountActions.Login.type:
        case AccountActions.CreateAccount.type:
            return { ...state, status: 'IN_PROGRESS', loading: true };
        case AccountActions.CreateAccountSuccess.type:
        case AccountActions.LoginSuccess.type:
            return {
                ...state,
                loggedIn: true,
                status: 'INIT',
                user: action.user,
                error: '',
                loading: false
            };
        case AccountActions.CreateAccountFailure.type:
        case AccountActions.LoginFailure.type:
            return { ...state, status: 'INIT', error: action.reason, loading: false };
        case AccountActions.Logout.type:
            return initialAccountState;
        case AccountActions.ClearError.type:
            return { ...state, error: '' };
        default:
            return state;
    }
}