import { createAction, props, union } from '@ngrx/store';

import { User } from '../../shared/models/user.interface';

const GetUser = createAction(
    '[Account] Get User'
);

const GetUserSuccess = createAction(
    '[API] Get User Success',
    props<{ user: User }>()
);

const GetUserFailure = createAction(
    '[API] Get User Failure',
    props<{ reason: string }>()
);

const Login = createAction(
    '[Login] Login Request',
    props<{ email: string, password: string }>()
);

const LoginSuccess = createAction(
    '[API] Login Success',
    props<{ user: User, token: string }>()
);

const LoginFailure = createAction(
    '[API] Login Failure',
    props<{ reason: string }>()
);

const CreateAccount = createAction(
    '[Register] Create Account',
    props<{ name: string, email: string, password: string }>()
);

const CreateAccountSuccess = createAction(
    '[API] Create Account Success',
    props<{ user: User, token: string }>()
);

const CreateAccountFailure = createAction(
    '[API] Create Account Failure',
    props<{ reason: string }>()
);

const Logout = createAction(
    '[Account] Logout'
);

export const AccountActions = {
    GetUser,
    GetUserSuccess,
    GetUserFailure,
    Login,
    LoginSuccess,
    LoginFailure,
    CreateAccount,
    CreateAccountSuccess,
    CreateAccountFailure,
    Logout
}

const ActionsUnion = union(AccountActions);

export type AccountActionsType = typeof ActionsUnion;