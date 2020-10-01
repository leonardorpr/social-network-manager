import { combineReducers } from 'redux';

import schedulePost from './schedulePost';
import schedules from './schedules';

export default combineReducers({ schedules, schedulePost });
