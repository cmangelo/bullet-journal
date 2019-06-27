import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { HabitsFacade } from '../+state/habits.facade';
import { FrequencyType } from '../../shared/enums/frequency-type.enum';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HabitsComponent implements OnInit {
  habits$ = this.facade.habits$;
  frequency = FrequencyType;

  constructor(private facade: HabitsFacade) { }

  ngOnInit() {
    this.facade.getHabits();
  }

}
