import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { FrequencyType } from '../../../shared/enums/frequency-type.enum';
import { Habit } from '../../../shared/models/habit.interface';

@Component({
  selector: 'app-habit-card',
  templateUrl: './habit-card.component.html',
  styleUrls: ['./habit-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HabitCardComponent implements OnInit {
  @Input() habit: Habit;
  frequency = FrequencyType;

  constructor() { }

  ngOnInit() {
  }

}
