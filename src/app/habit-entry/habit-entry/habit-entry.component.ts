import { Component, OnInit } from '@angular/core';
import { FrequencyType } from 'src/app/shared/enums/frequency-type.enum';
import { JournalService } from 'src/app/journal/journal.service';
import { Habit } from 'src/app/shared/models/habit.interface';

@Component({
  selector: 'app-habit-entry',
  templateUrl: './habit-entry.component.html',
  styleUrls: ['./habit-entry.component.less']
})
export class HabitEntryComponent implements OnInit {
  name: string;
  frequencyTypes = FrequencyType;
  start: Date;
  frequencyType: FrequencyType;

  constructor(private service: JournalService) { }

  ngOnInit() {

  }

  createHabit() {
    // const habit = <Habit> { name: this.name, frequency: FrequencyType.Daily, start: this.start}

    // this.service.createHabit(habit);
  }

}
