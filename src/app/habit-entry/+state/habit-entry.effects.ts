import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HabitService } from 'src/app/shared/services/habit.service';
import { HabitEntryActionsType, HabitEntryActions } from './habit-entry.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HabitEntryEffects {

    constructor(private actions: Actions<HabitEntryActionsType>, private service: HabitService) { }

    @Effect()
    createHabit$ = this.actions
        .pipe(
            ofType(HabitEntryActions.CreateHabit.type),
            switchMap(({ habit }) => this.service.createHabit(habit)
                .pipe(
                    map(habit => HabitEntryActions.CreateHabitSuccess({ habit })),
                    catchError(err => of(HabitEntryActions.CreateHabitFailure(err)))
                )
            )
        )
}