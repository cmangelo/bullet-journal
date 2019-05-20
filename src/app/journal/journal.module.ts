import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JournalRoutingModule } from './journal-routing.module';
import { JournalComponent } from './journal/journal.component';

@NgModule({
  declarations: [JournalComponent],
  imports: [
    CommonModule,
    FormsModule,
    JournalRoutingModule
  ]
})
export class JournalModule { }
