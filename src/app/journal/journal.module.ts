import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { JournalRoutingModule } from './journal-routing.module';
import { JournalComponent } from './journal/journal.component';

@NgModule({
  declarations: [JournalComponent],
  imports: [
    CommonModule,
    FormsModule,
    JournalRoutingModule,
    SharedModule
  ]
})
export class JournalModule { }
