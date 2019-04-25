import { Injectable } from '@angular/core';
import { Habit } from '../shared/models/habit.interface';
import { FrequencyType } from '../shared/enums/frequency-type.enum';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor() { }

  getJournal(): Array<Habit> {
    return new Array(
      <Habit> {name: "Devo",frequency: FrequencyType.Daily, start: new Date(2019, 1, 1), completions:this.getCompletions()},
      <Habit> {name: "Proverb",frequency: FrequencyType.Daily, start: new Date(2019, 1, 1), completions:this.getCompletions()},
      <Habit> {name: "Leetcode",frequency: FrequencyType.Daily, start: new Date(2019, 1, 1), completions:this.getCompletions()},
      <Habit> {name: "Book",frequency: FrequencyType.Weekly, start: new Date(2019, 1, 1), completions:this.getCompletions()},
      <Habit> {name: "Shoulder",frequency: FrequencyType.BiDaily, start: new Date(2019, 1, 1), completions:this.getCompletions()}
    );
  }

  getCompletions(): Array<number> {
    return [1,3,5,6,9,12,13];
    // return new Array(
    //   new Date(2019, 1,2),
    //   new Date(2019, 1,3),
    //   new Date(2019, 1,6),
    //   new Date(2019, 1,12),
    //   new Date(2019, 1,15),
    //   new Date(2019, 1,18),
    //   new Date(2019, 1,23),
    // )
  }

}
