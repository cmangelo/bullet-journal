import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HabitEntryFacade } from '../+state/habit-entry.facade';

@Component({
  selector: 'app-habit-entry',
  templateUrl: './habit-entry.component.html',
  styleUrls: ['./habit-entry.component.less']
})
export class HabitEntryComponent implements OnInit {
  loading$ = this.facade.loading$;
  error$ = this.facade.error$;

  habitEntryForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    frequency: new FormControl(1, Validators.required),
    startDate: new FormControl(new Date(), Validators.required)
  });

  constructor(private facade: HabitEntryFacade) { }

  ngOnInit() {

  }

  submit() {
    this.facade.createHabit(this.habitEntryForm.value);
  }
}
