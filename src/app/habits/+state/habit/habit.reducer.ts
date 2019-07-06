import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Habit } from '../../../shared/models/habit.interface';
import * as HabitActions from './habit.actions';

export interface State extends EntityState<Habit> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Habit> = createEntityAdapter<Habit>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const habitReducer = createReducer(
  initialState,
  on(HabitActions.addHabit,
    (state, action) => adapter.addOne(action.habit, state)
  ),
  on(HabitActions.upsertHabit,
    (state, action) => adapter.upsertOne(action.habit, state)
  ),
  on(HabitActions.addHabits,
    (state, action) => adapter.addMany(action.habits, state)
  ),
  on(HabitActions.upsertHabits,
    (state, action) => adapter.upsertMany(action.habits, state)
  ),
  on(HabitActions.updateHabit,
    (state, action) => adapter.updateOne(action.habit, state)
  ),
  on(HabitActions.updateHabits,
    (state, action) => adapter.updateMany(action.habits, state)
  ),
  on(HabitActions.deleteHabit,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(HabitActions.deleteHabits,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(HabitActions.loadHabits,
    (state, action) => adapter.addAll(action.habits, state)
  ),
  on(HabitActions.clearHabits,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return habitReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
