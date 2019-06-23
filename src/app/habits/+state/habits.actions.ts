import { createAction, props, union } from '@ngrx/store';

import { Habit } from '../../shared/models/habit.interface';
import { HabitEntryRequest } from '../models/habit-entry-request.interface';

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
    CreateHabit,
    CreateHabitSuccess,
    CreateHabitFailure
};

const ActionsUnion = union(HabitsActions);

export type HabitsActionsType = typeof ActionsUnion;