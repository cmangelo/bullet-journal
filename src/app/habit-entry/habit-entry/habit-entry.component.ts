import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FrequencyType } from 'src/app/shared/enums/frequency-type.enum';

import { HabitEntryFacade } from '../+state/habit-entry.facade';

@Component({
  selector: 'app-habit-entry',
  templateUrl: './habit-entry.component.html',
  styleUrls: ['./habit-entry.component.less']
})
export class HabitEntryComponent implements OnInit {
  name: string;
  frequencyTypes = FrequencyType;
  start: Date;
  // frequencyType: FrequencyType;

  habitEntryForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    frequencyType: new FormControl(1, Validators.required),
    startDate: new FormControl(new Date(), Validators.required)
  });

  constructor(private facade: HabitEntryFacade) { }

  ngOnInit() {

  }

  createHabit() {
    // const habit = <Habit> { name: this.name, frequency: FrequencyType.Daily, start: this.start}

    // this.service.createHabit(habit);
  }

  submit() {
    this.facade.createHabit(this.habitEntryForm.value);
  }
}
