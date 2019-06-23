import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Habits } from './habits.reducer';

export const getHabitEntry = createFeatureSelector<Habits>('habitEntry');
export const getLoading = createSelector(getHabitEntry, (habitEntry: Habits) => habitEntry.loading);
export const getError = createSelector(getHabitEntry, (habitEntry: Habits) => habitEntry.error);

export const habitsQuery = {
    getLoading,
    getError
};