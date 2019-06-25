import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { HabitsFacade } from '../+state/habits.facade';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HabitsComponent implements OnInit {
  habits$ = this.facade.habits$;

  constructor(private facade: HabitsFacade) { }

  ngOnInit() {
    this.facade.getHabits();
  }

}
