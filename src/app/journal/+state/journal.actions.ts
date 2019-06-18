import { createAction, props } from '@ngrx/store';

const action = createAction(
    '[Journal] some action',
    props<{}>()
);