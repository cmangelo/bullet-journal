import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HabitEntryComponent } from './habit-entry/habit-entry.component';
import { HabitsComponent } from './habits/habits.component';

const routes: Routes = [
  {
    path: 'habitEntry/:id',
    component: HabitEntryComponent
  },
  {
    path: 'habitEntry',
    component: HabitEntryComponent
  },
  {
    path: 'habits',
    component: HabitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitsRoutingModule { }
