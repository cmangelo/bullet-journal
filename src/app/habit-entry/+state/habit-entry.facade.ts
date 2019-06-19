import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { HabitEntryRequest } from '../models/habit-entry-request.interface';
import { HabitEntryActions } from './habit-entry.actions';
import { HabitEntryState } from './habit-entry.reducer';

@Injectable({
    providedIn: 'root'
})
export class HabitEntryFacade {
    constructor(private store: Store<HabitEntryState>) { }

    createHabit(habit: HabitEntryRequest) {
        this.store.dispatch(HabitEntryActions.CreateHabit({ habit }));
    }
}