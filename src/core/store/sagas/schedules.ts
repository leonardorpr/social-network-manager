import { call, put, takeLatest } from 'redux-saga/effects';

import api from 'core/services/api';
import {
  fetchSchedulesRequest,
  fetchSchedulesSuccess,
  fetchSchedulesFailure,
  fetchPostStatusRequest,
  fetchPostStatusSuccess,
  fetchPostStatusFailure,
} from 'core/store/slices/schedules';

function* getSchedules() {
  try {
    const { data: schedulesResponse } = yield call(api.get, './db/schedules.json');

    yield put(fetchSchedulesSuccess(schedulesResponse.data));
  } catch (error) {
    yield put(fetchSchedulesFailure());
  }
}

function* getPostStatus() {
  try {
    const { data: postStatusResponse } = yield call(api.get, './db/schedules-status.json');

    yield put(fetchPostStatusSuccess(postStatusResponse.data));
  } catch (error) {
    yield put(fetchPostStatusFailure());
  }
}

export default [takeLatest(fetchSchedulesRequest, getSchedules), takeLatest(fetchPostStatusRequest, getPostStatus)];
