import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Habit } from '../../shared/models/habit.interface';
import { HabitEntryRequest } from '../models/habit-entry-request.interface';
import { HabitsActions } from './habits.actions';
import { HabitsState } from './habits.reducer';
import { habitsQuery } from './habits.selectors';

@Injectable({
    providedIn: 'root'
})
export class HabitsFacade {
    habits$: Observable<Array<Habit>> = this.store.select(habitsQuery.getHabits);
    loading$: Observable<boolean> = this.store.select(habitsQuery.getLoading);
    error$: Observable<string> = this.store.select(habitsQuery.getError);

    constructor(private store: Store<HabitsState>) { }

    getHabits(fromDate?: Date, toDate?: Date) {
        this.store.dispatch(HabitsActions.GetHabits({}));
    }

    createHabit(habit: HabitEntryRequest) {
        this.store.dispatch(HabitsActions.CreateHabit({ habit }));
    }
}