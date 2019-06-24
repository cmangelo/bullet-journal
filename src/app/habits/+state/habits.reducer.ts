import { createReducer, on } from '@ngrx/store';
import { Habit } from 'src/app/shared/models/habit.interface';

import { HabitsActions } from './habits.actions';

export interface Habits {
    loading: boolean;
    error: string;
    habits: Array<Habit>;
}

export interface HabitsState {
    readonly habitEntry: Habits;
}

export const initialHabitsState: Habits = {
    loading: false,
    error: null,
    habits: null
}

export const reducer = createReducer(
    initialHabitsState,
    on(HabitsActions.GetHabits, state => ({ ...state, loading: true, error: null })),
    on(HabitsActions.GetHabitsSuccess, (state, { habits }) => ({ ...state, loading: false, habits })),
    on(HabitsActions.GetHabitsFailure, (state, { reason }) => ({ ...state, loading: false, error: reason })),
    on(HabitsActions.CreateHabit, state => ({ ...state, loading: true, error: null })),
    on(HabitsActions.CreateHabitSuccess, state => ({ ...state, loading: false })),
    on(HabitsActions.CreateHabitFailure, (state, { reason }) => ({ ...state, loading: false, error: reason }))
);