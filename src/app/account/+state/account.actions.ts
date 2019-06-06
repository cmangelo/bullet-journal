import { createAction, props } from '@ngrx/store';

import { User } from '../../shared/models/user.interface';

const LoginRequest = createAction(
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
