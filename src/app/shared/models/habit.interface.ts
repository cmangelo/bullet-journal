import { FrequencyType } from '../enums/frequency-type.enum';
import { Completion } from './completion.interface';

export interface Habit {
    _id: string;
    description: string;
    owner: string;
    frequency: FrequencyType;
    start: Date;
    completions: Array<Completion>;
    archived: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}