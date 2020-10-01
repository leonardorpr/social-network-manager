import { all } from 'redux-saga/effects';

import schedulePost from './schedulePost';
import schedules from './schedules';

function* rootSaga() {
  yield all([...schedulePost, ...schedules]);
}

export default rootSaga;
