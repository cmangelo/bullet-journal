import { createReducer, on } from '@ngrx/store';

import { HabitsActions } from './habits.actions';

export interface Habits {
    loading: boolean;
    error: string;
}

export interface HabitsState {
    readonly habitEntry: Habits;
}

export const initialHabitsState: Habits = {
    loading: false,
    error: null
}

export const reducer = createReducer(
    initialHabitsState,
    on(HabitsActions.CreateHabit, state => ({ ...state, loading: true, error: null })),
    on(HabitsActions.CreateHabitSuccess, state => ({ ...state, loading: false })),
    on(HabitsActions.CreateHabitFailure, (state, { reason }) => ({ ...state, loading: false, error: reason }))
);