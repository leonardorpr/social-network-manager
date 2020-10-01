import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';

import { ISchedulePostSocialNetwork, ISchedulePost } from 'core/interfaces/ISchedulePost';
import { ISchedulePostStoreState } from 'core/store/interfaces/ISchedulePostStore';

const initialState: ISchedulePostStoreState = {
  socialNetworks: [],
  draft: {
    publicationDate: null,
    publicationTime: '',
    text: '',
    media: '',
    socialNetworks: [],
  },
};

const getSocialNetworksRequest: CaseReducer<ISchedulePostStoreState> = (state) => ({ ...state });

const getSocialNetworksSuccess: CaseReducer<ISchedulePostStoreState, PayloadAction<ISchedulePostSocialNetwork[]>> = (
  state,
  action,
) => ({
  ...state,
  socialNetworks: action.payload,
});

const getSocialNetworksFailure: CaseReducer<ISchedulePostStoreState> = (state) => ({ ...state });

const saveDraft: CaseReducer<ISchedulePostStoreState, PayloadAction<ISchedulePost>> = (state, action) => ({
  ...state,
  draft: action.payload,
});

const clearPreviouDraft: CaseReducer<ISchedulePostStoreState> = (state) => ({
  ...state,
  draft: initialState.draft,
});

const schedulePost = createSlice({
  name: 'schedulePost',
  initialState,
  reducers: {
    socialNetworksRequest: getSocialNetworksRequest,
    socialNetworksSuccess: getSocialNetworksSuccess,
    socialNetworksFailure: getSocialNetworksFailure,
    setDraft: saveDraft,
    clearDraft: clearPreviouDraft,
  },
});

export const {
  socialNetworksRequest,
  socialNetworksSuccess,
  socialNetworksFailure,
  setDraft,
  clearDraft,
} = schedulePost.actions;

export default schedulePost.reducer;
