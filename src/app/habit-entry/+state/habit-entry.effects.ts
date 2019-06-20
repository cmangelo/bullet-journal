import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HabitService } from 'src/app/shared/services/habit.service';

import { HabitEntryActions, HabitEntryActionsType } from './habit-entry.actions';

@Injectable({
    providedIn: 'root'
})
export class HabitEntryEffects {

    constructor(private actions: Actions<HabitEntryActionsType>, private service: HabitService) { }

    @Effect()
    createHabit$ = this.actions
        .pipe(
            ofType(HabitEntryActions.CreateHabit),
            switchMap(({ habit }) => this.service.createHabit(habit)
                .pipe(
                    map(habit => HabitEntryActions.CreateHabitSuccess({ habit })),
                    catchError(err => of(HabitEntryActions.CreateHabitFailure(err)))
                )
            )
        )
}