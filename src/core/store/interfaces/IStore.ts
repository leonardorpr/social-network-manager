import { ISchedulePostStoreState } from 'core/store/interfaces/ISchedulePostStore';
import { IScheduleStoreState } from 'core/store/interfaces/IScheduleStore';

export interface IStore {
  schedules: IScheduleStoreState;
  schedulePost: ISchedulePostStoreState;
}
