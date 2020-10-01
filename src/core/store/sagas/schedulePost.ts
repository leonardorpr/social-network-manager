import { call, put, takeLatest } from 'redux-saga/effects';

import api from 'core/services/api';
import { socialNetworksRequest, socialNetworksSuccess, socialNetworksFailure } from 'core/store/slices/schedulePost';

function* getSocialNetworks() {
  try {
    const { data: socialNetworksResponse } = yield call(api.get, './db/social-networks.json');

    yield put(socialNetworksSuccess(socialNetworksResponse.data));
  } catch (error) {
    yield put(socialNetworksFailure());
  }
}

export default [takeLatest(socialNetworksRequest, getSocialNetworks)];
