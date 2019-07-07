import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Habit } from '../../../shared/models/habit.interface';


export const loadHabits = createAction(
  '[Habit/API] Load Habits',
  props<{ habits: Habit[] }>()
);

export const addHabit = createAction(
  '[Habit/API] Add Habit',
  props<{ habit: Habit }>()
);

export const upsertHabit = createAction(
  '[Habit/API] Upsert Habit',
  props<{ habit: Habit }>()
);

export const addHabits = createAction(
  '[Habit/API] Add Habits',
  props<{ habits: Habit[] }>()
);

export const upsertHabits = createAction(
  '[Habit/API] Upsert Habits',
  props<{ habits: Habit[] }>()
);

export const updateHabit = createAction(
  '[Habit/API] Update Habit',
  props<{ habit: Update<Habit> }>()
);

export const updateHabits = createAction(
  '[Habit/API] Update Habits',
  props<{ habits: Update<Habit>[] }>()
);

export const deleteHabit = createAction(
  '[Habit/API] Delete Habit',
  props<{ id: string }>()
);

export const deleteHabits = createAction(
  '[Habit/API] Delete Habits',
  props<{ ids: string[] }>()
);

export const clearHabits = createAction(
  '[Habit/API] Clear Habits'
);
