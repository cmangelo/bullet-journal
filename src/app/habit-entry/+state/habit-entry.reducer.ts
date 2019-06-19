import { createReducer, on } from '@ngrx/store';

import { HabitEntryActions } from './habit-entry.actions';

export interface HabitEntry {
    loading: boolean;
    error: string;
}

export interface HabitEntryState {
    readonly habitEntry: HabitEntry;
}

export const initialHabitEntryState: HabitEntry = {
    loading: false,
    error: null
}

export const reducer = createReducer(
    initialHabitEntryState,
    on(HabitEntryActions.CreateHabit, state => ({ ...state, loading: true, error: null })),
    on(HabitEntryActions.CreateHabitSuccess, state => ({ ...state, loading: false })),
    on(HabitEntryActions.CreateHabitFailure, (state, { reason }) => ({ ...state, loading: false, error: reason }))
);