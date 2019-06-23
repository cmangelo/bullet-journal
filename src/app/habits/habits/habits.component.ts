import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HabitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
