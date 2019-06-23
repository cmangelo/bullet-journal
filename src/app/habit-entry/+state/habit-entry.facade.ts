import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { HabitEntryRequest } from '../models/habit-entry-request.interface';
import { HabitEntryActions } from './habit-entry.actions';
import { HabitEntryState } from './habit-entry.reducer';
import { habitEntryQuery } from './habit-entry.selectors';

@Injectable({
    providedIn: 'root'
})
export class HabitEntryFacade {
    loading$: Observable<boolean> = this.store.select(habitEntryQuery.getLoading);
    error$: Observable<string> = this.store.select(habitEntryQuery.getError);

    constructor(private store: Store<HabitEntryState>) { }

    createHabit(habit: HabitEntryRequest) {
        this.store.dispatch(HabitEntryActions.CreateHabit({ habit }));
    }
}