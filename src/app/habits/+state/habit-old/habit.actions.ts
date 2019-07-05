import { EntityMap, Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Habit } from 'src/app/shared/models/habit.interface';


export const loadHabits = createAction('[API] Load Habits', props<{ habits: Habit[] }>());
export const addHabit = createAction('[User] Add Habit', props<{ habit: Habit }>());
export const upsertHabit = createAction('[User] Upsert Habit', props<{ habit: Habit }>());
export const updateHabit = createAction('[User] Update Habit', props<{ habit: Update<Habit> }>());
export const updateHabits = createAction('[User/API] Update Habits', props<{ habits: Update<Habit>[] }>());
export const mapHabits = createAction('[User/API] Map Habits', props<{ entityMap: EntityMap<Habit> }>());
export const clearHabits = createAction('[User] Clear Habits');