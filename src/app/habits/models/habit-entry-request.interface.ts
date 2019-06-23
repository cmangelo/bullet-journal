import { FrequencyType } from '../../shared/enums/frequency-type.enum';

export interface HabitEntryRequest {
    title: string;
    description: string;
    start: Date;
    frequency: FrequencyType;
}