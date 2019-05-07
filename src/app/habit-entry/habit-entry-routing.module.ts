import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitEntryComponent } from './habit-entry/habit-entry.component';

const routes: Routes = [{
    path: 'habitEntry',
    component: HabitEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitEntryRoutingModule { }
