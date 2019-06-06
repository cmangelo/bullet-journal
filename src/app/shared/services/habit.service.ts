import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as moment from 'moment';

import { Habit } from '../models/habit.interface';
import { ApiHelperService } from 'src/app/core/api/api-helper.service';

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

} 