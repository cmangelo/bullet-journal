import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HabitEntryRoutingModule } from './habit-entry-routing.module';
import { HabitEntryComponent } from './habit-entry/habit-entry.component';

@NgModule({
  declarations: [HabitEntryComponent],
  imports: [
    CommonModule,
    FormsModule,
    HabitEntryRoutingModule
  ]
})
export class HabitEntryModule { }
