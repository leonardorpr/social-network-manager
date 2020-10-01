export interface ISchedule {
  id: number;
  socialNetworkKey: number[];
  media?: string;
  text: string;
  publicationDate: Date | string;
  statusKey: number;
}

export interface IScheduleStatus {
  id: number;
  name: string;
  color: string;
}
