import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import tasks from './tasks/sagas';
import task from './task/sagas';

export default function* rootSaga() {
  return yield all([auth, tasks, task]);
}
