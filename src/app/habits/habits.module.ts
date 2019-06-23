import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HabitsEffects } from './+state/habits.effects';
import { initialHabitsState, reducer } from './+state/habits.reducer';
import { HabitEntryComponent } from './habit-entry/habit-entry.component';
import { HabitsRoutingModule } from './habits-routing.module';
import { HabitsComponent } from './habits/habits.component';

@NgModule({
  declarations: [HabitsComponent, HabitEntryComponent],
  imports: [
    CommonModule,
    HabitsRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('habits', reducer, { initialState: initialHabitsState }),
    EffectsModule.forFeature([HabitsEffects])
  ]
})
export class HabitsModule { }
