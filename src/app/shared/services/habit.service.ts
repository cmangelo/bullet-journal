import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHelperService } from 'src/app/core/api/api-helper.service';
import { HabitEntryRequest } from 'src/app/habit-entry/models/habit-entry-request.interface';

import { Habit } from '../models/habit.interface';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private api: ApiHelperService) { }

  getHabits(fromDate?: Date, toDate?: Date): Observable<Array<Habit>> {
    let queryString = '';
    if (fromDate && toDate) {
      queryString += `?fromDate=${fromDate.toJSON()}&toDate=${toDate.toJSON()}`;
    }
    return this.api.get<Array<Habit>>('habits' + queryString);
  }

  createHabit(habit: HabitEntryRequest): Observable<Habit> {
    console.log(habit)
    return this.api.post<Habit>('habits', habit);
  }

} 