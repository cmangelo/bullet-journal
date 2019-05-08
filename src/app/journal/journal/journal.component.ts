import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Habit } from 'src/app/shared/models/habit.interface';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalComponent implements OnInit {
  date: Date;
  habits: Array<Habit>;
  days: any[] = [];
  today: number;

  constructor(private service: JournalService) { }

  ngOnInit() {
    this.service.getJournalObs().subscribe(data => this.habits = data);
    let x = new Array(this.getDaysOfMonth(2019,1));
    for(var i = 0; i < x.length; i++){
      this.days[i] = {
        day: i + 1,
        expanded: false
      }
    }
    this.date = new Date(2019,3,1);
    this.today = new Date().getDate();
  }

  getDaysOfMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  toggleDay(habit: Habit, day: number) {
    if (day > this.today)
      return;

    if (habit.completions[day]) {
      delete habit.completions[day];
    } else {
      habit.completions[day] = true;
    }
  }

  incrementMonth(num: number) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + num);
    
    console.log(this.date)
  }
}
