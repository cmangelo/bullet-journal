import { FrequencyType } from '../enums/frequency-type.enum';
import { Completion } from './completion.interface';

export interface Habit {
    _id: string;
    title: string;
    owner: string;
    frequency: FrequencyType;
    startDate: Date;
    completions: Array<Completion>;
    archived: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}