import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { HabitEntryRequest } from '../models/habit-entry-request.interface';
import { HabitsActions } from './habits.actions';
import { HabitsState } from './habits.reducer';
import { habitsQuery } from './habits.selectors';

@Injectable({
    providedIn: 'root'
})
export class HabitEntryFacade {
    loading$: Observable<boolean> = this.store.select(habitsQuery.getLoading);
    error$: Observable<string> = this.store.select(habitsQuery.getError);

    constructor(private store: Store<HabitsState>) { }

    createHabit(habit: HabitEntryRequest) {
        this.store.dispatch(HabitsActions.CreateHabit({ habit }));
    }
}