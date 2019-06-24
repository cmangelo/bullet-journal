import { createAction, props, union } from '@ngrx/store';

import { Habit } from '../../shared/models/habit.interface';
import { HabitEntryRequest } from '../models/habit-entry-request.interface';

const GetHabits = createAction(
    '[Habits] Get Habits',
    props<{ fromDate?: Date, toDate?: Date }>()
);

const GetHabitsSuccess = createAction(
    '[API] Get Habits Success',
    props<{ habits: Array<Habit> }>()
);

const GetHabitsFailure = createAction(
    '[API] Get Habits Failure',
    props<{ reason: string }>()
);

const CreateHabit = createAction(
    '[Habit Entry] Create Habit',
    props<{ habit: HabitEntryRequest }>()
);

const CreateHabitSuccess = createAction(
    '[API] Create Habit Success',
    props<{ habit: Habit }>()
);

const CreateHabitFailure = createAction(
    '[API] Create Habit Failure',
    props<{ reason: string }>()
);

export const HabitsActions = {
    GetHabits,
    GetHabitsSuccess,
    GetHabitsFailure,
    CreateHabit,
    CreateHabitSuccess,
    CreateHabitFailure
};

const ActionsUnion = union(HabitsActions);

export type HabitsActionsType = typeof ActionsUnion;