import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import { tasksSuccess } from './actions';
import { signOut } from '../auth/actions';

export function* listTasks() {
  try {
    const { data } = yield call(api.get, 'tasks');

    yield put(tasksSuccess(data));
  } catch (e) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signOut());
  }
}

export default all([
  takeLatest('@tasks/LIST_REQUEST', listTasks),
]);
