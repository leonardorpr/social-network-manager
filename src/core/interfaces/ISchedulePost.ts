export interface ISchedulePost {
  socialNetworks: ISchedulePostSocialNetwork[];
  media?: string;
  text: string;
  publicationDate: Date | null;
  publicationTime: Date | null;
}

export interface ISchedulePostSocialNetwork {
  id: number;
  name: string;
  icon: string;
  status: 'enabled' | 'disabled';
  selected: boolean;
}