import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitEntryRoutingModule } from './habit-entry-routing.module';
import { HabitEntryComponent } from './habit-entry/habit-entry.component';

@NgModule({
  declarations: [HabitEntryComponent],
  imports: [
    CommonModule,
    HabitEntryRoutingModule
  ]
})
export class HabitEntryModule { }
