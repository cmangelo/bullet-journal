import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Habits } from './habits.reducer';

export const getHabitState = createFeatureSelector<Habits>('habits');
export const getHabits = createSelector(getHabitState, (habits: Habits) => habits.habits);
export const getLoading = createSelector(getHabitState, (habits: Habits) => habits.loading);
export const getError = createSelector(getHabitState, (habits: Habits) => habits.error);

export const habitsQuery = {
    getHabits,
    getLoading,
    getError
};