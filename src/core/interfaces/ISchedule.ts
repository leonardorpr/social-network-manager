export interface ISchedule {
  id: number;
  socialNetworkKey: number[];
  media?: string;
  text: string;
  publicationDate: Date | string;
  statusKey: number | string;
}

export interface IScheduleStatus {
  id: number;
  name: string;
  color: string;
}
