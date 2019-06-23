import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HabitService } from 'src/app/habits/habit.service';

import { HabitsActions, HabitsActionsType } from './habits.actions';

@Injectable({
    providedIn: 'root'
})
export class HabitsEffects {

    constructor(private actions: Actions<HabitsActionsType>,
        private service: HabitService, private router: Router) { }

    @Effect()
    createHabit$ = this.actions
        .pipe(
            ofType(HabitsActions.CreateHabit),
            switchMap(({ habit }) => this.service.createHabit(habit)
                .pipe(
                    map(habit => HabitsActions.CreateHabitSuccess({ habit })),
                    catchError(err => of(HabitsActions.CreateHabitFailure(err)))
                )
            )
        );

    @Effect({ dispatch: false })
    createHabitSuccess$ = this.actions
        .pipe(
            ofType(HabitsActions.CreateHabitSuccess),
            tap(() => this.router.navigateByUrl('/journal'))
        );
}