import { ISchedulePost, ISchedulePostSocialNetwork } from 'core/interfaces/ISchedulePost';

export interface ISchedulePostStoreState {
  socialNetworks: ISchedulePostSocialNetwork[];
  draft: ISchedulePost;
}
