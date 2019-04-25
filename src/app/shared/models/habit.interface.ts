import { FrequencyType } from '../enums/frequency-type.enum';

export interface Habit {
    name: string;
    frequency: FrequencyType;
    start: Date;
    completions: Array<number>;
}