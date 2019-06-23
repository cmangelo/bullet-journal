import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HabitEntry } from './habit-entry.reducer';

export const getHabitEntry = createFeatureSelector<HabitEntry>('habitEntry');
export const getLoading = createSelector(getHabitEntry, (habitEntry: HabitEntry) => habitEntry.loading);
export const getError = createSelector(getHabitEntry, (habitEntry: HabitEntry) => habitEntry.error);

export const habitEntryQuery = {
    getLoading,
    getError
};