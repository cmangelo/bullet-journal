import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule,
    JournalModule,
    HabitEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
