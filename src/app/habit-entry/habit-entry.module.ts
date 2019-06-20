import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HabitEntryEffects } from './+state/habit-entry.effects';
import { initialHabitEntryState, reducer } from './+state/habit-entry.reducer';
import { HabitEntryRoutingModule } from './habit-entry-routing.module';
import { HabitEntryComponent } from './habit-entry/habit-entry.component';

@NgModule({
  declarations: [HabitEntryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HabitEntryRoutingModule,
    StoreModule.forFeature('habitEntry', reducer, { initialState: initialHabitEntryState }),
    EffectsModule.forFeature([HabitEntryEffects])
  ]
})
export class HabitEntryModule { }
