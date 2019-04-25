import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Habit } from 'src/app/shared/models/habit.interface';
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
  days: any[];

  constructor(private service: JournalService) { }

  ngOnInit() {
    this.habits = this.service.getJournal();
    this.days = new Array(this.getDaysOfMonth(2019,1));
    for(var i = 0; i < this.days.length; i++){
      this.days[i] = i + 1;
    }
    this.date = new Date(2019,1,1);
  }

  getDaysOfMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }
}
