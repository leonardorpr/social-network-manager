import { all } from 'redux-saga/effects';

import schedulePost from './schedulePost';

function* rootSaga() {
  yield all([...schedulePost]);
}

export default rootSaga;
