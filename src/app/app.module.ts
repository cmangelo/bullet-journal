import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalModule } from './journal/journal.module';
import { HabitEntryModule } from './habit-entry/habit-entry.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    JournalModule,
    HabitEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
