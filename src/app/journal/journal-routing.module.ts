import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalComponent } from '../journal/journal/journal.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/journal',
    pathMatch: 'full'
  },
  {
    path: 'journal',
    component: JournalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
