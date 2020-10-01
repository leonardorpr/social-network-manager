import { ISchedule, IScheduleStatus } from 'core/interfaces/ISchedule';

export interface IScheduleStoreState {
  schedules: ISchedule[];
  status: IScheduleStatus[];
  recentSchedules: ISchedule[];
}
