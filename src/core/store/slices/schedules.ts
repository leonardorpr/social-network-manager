import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';

import { IScheduleStatus, ISchedule } from 'core/interfaces/ISchedule';
import { IScheduleStoreState } from 'core/store/interfaces/IScheduleStore';

const initialState: IScheduleStoreState = {
  schedules: [],
  recentSchedules: [],
  status: [],
};

const getSchedulesRequest: CaseReducer<IScheduleStoreState> = (state) => ({ ...state });

const getSchedulesSuccess: CaseReducer<IScheduleStoreState, PayloadAction<ISchedule[]>> = (state, action) => ({
  ...state,
  schedules: action.payload,
});

const getSchedulesFailure: CaseReducer<IScheduleStoreState> = (state) => ({ ...state });

const getPostStatusRequest: CaseReducer<IScheduleStoreState> = (state) => ({ ...state });

const getPostStatusSuccess: CaseReducer<IScheduleStoreState, PayloadAction<IScheduleStatus[]>> = (state, action) => ({
  ...state,
  status: action.payload,
});

const getPostStatusFailure: CaseReducer<IScheduleStoreState> = (state) => ({ ...state });

const createRecentSchedule: CaseReducer<IScheduleStoreState, PayloadAction<ISchedule>> = (state, action) => ({
  ...state,
  recentSchedules: [...state.recentSchedules, action.payload],
});

const schedules = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    fetchSchedulesRequest: getSchedulesRequest,
    fetchSchedulesSuccess: getSchedulesSuccess,
    fetchSchedulesFailure: getSchedulesFailure,
    fetchPostStatusRequest: getPostStatusRequest,
    fetchPostStatusSuccess: getPostStatusSuccess,
    fetchPostStatusFailure: getPostStatusFailure,
    setRecentSchedules: createRecentSchedule,
  },
});

export const {
  fetchSchedulesRequest,
  fetchSchedulesSuccess,
  fetchSchedulesFailure,
  fetchPostStatusRequest,
  fetchPostStatusSuccess,
  fetchPostStatusFailure,
  setRecentSchedules,
} = schedules.actions;

export default schedules.reducer;
