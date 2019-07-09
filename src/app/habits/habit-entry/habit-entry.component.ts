import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HabitsFacade } from '../+state/habits.facade';

@Component({
  selector: 'app-habit-entry',
  templateUrl: './habit-entry.component.html',
  styleUrls: ['./habit-entry.component.less']
})
export class HabitEntryComponent implements OnInit {
  loading$ = this.facade.loading$;
  error$ = this.facade.error$;
  date = new Date();

  habitEntryForm = new FormGroup({
    title: new FormControl('', Validators.required),
    frequency: new FormControl('1', Validators.required),
    startDate: new FormControl(new Date().toISOString().substring(0, 10), Validators.required)
  });

  constructor(private facade: HabitsFacade) { }

  ngOnInit() {
    //once were in here, we can use the _id from the route params to grab the habit from the store by ID (the data should be normalized so we can grab it instantly)
  }

  submit() {
    this.facade.createHabit(this.habitEntryForm.value);
  }
}
