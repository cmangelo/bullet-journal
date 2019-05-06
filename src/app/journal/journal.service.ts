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

  getCompletions(): {[key: number]: boolean} {
    return {
      1: true,
      3: true,
      5: true,
      6: true,
      9: true,
      12: true,
      17: true,
      23: true,
      29: true
    }
  }

}
