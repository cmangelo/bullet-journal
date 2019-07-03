import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Habit } from '../../../shared/models/habit.interface';
import * as HabitActions from './habit.actions';

export interface State extends EntityState<Habit> {
    selectedHabitId: number | null;
}


export function selectUserId(habit: Habit): string {
    //In this case this would be optional since primary key is id
    return habit._id;
}

export function sortByDate(a: Habit, b: Habit): number {
    return a.startDate > b.startDate ? 1 : -1;
}

export const adapter: EntityAdapter<Habit> = createEntityAdapter<Habit>({
    selectId: selectUserId,
    sortComparer: sortByDate,
});

export const initialState: State = adapter.getInitialState({
    selectedHabitId: null
});

export function reducer(state: State | undefined, action: Action) {
    return habitReducer(state, action);
}

const habitReducer = createReducer(
    initialState,
    on(HabitActions.addHabit, (state, { habit }) => {
        return adapter.addOne(habit, state)
    }),
    on(HabitActions.upsertHabit, (state, { habit }) => {
        return adapter.upsertOne(habit, state);
    }),
    on(HabitActions.updateHabit, (state, { habit }) => {
        return adapter.updateOne(habit, state);
    }),
    on(HabitActions.updateHabits, (state, { habits }) => {
        return adapter.updateMany(habits, state);
    }),
    on(HabitActions.mapHabits, (state, { entityMap }) => {
        return adapter.map(entityMap, state);
    }),
    on(HabitActions.loadHabits, (state, { habits }) => {
        return adapter.addAll(habits, state);
    }),
    on(HabitActions.clearHabits, state => {
        return adapter.removeAll({ ...state, selectedHabitId: null });
    })
)