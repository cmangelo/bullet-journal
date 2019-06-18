import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Habit } from 'src/app/shared/models/habit.interface';
import { HabitService } from 'src/app/shared/services/habit.service';

import { JournalService } from '../journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalComponent implements OnInit {
  date: Date;
  habits: Array<Habit>;
  days: any[] = [];
  today: number;
  note: string;

  constructor(private service: JournalService, private habitService: HabitService) { }

  ngOnInit() {
    this.date = new Date(2019, 3, 1);
    this.today = new Date().getDate();
    this.habitService.getHabits(new Date(2019, 5, 1), new Date(2019, 5, 30)).subscribe(data => {
      this.habits = data;
      console.log(this.habits)
    });
    let x = new Array(this.getDaysOfMonth(2019, 1));
    for (var i = 0; i < x.length; i++) {
      this.days[i] = {
        day: i + 1,
        expanded: false
      }
    }
  }

  saveNote() {
    this.service.saveNote(this.note).subscribe(res => {
      console.log('success')
    })
  }

  getDaysOfMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  dateChange(date: Date) {

  }

  toggleDay(habit: Habit, day: number) {
    if (day > this.today)
      return;

    if (habit.completions[day]) {
      delete habit.completions[day];
    } else {
      // habit.completions[day] = true;
    }
  }

  incrementMonth(num: number) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + num);

    console.log(this.date)
  }
}
