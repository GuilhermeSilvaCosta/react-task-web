import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import { saveTaskSuccess, doneUndoneTaskSuccess, deleteTaskSuccess } from './actions';
import { signOut } from '../auth/actions';

export function* saveTask({ payload }) {
  try {
    const { title } = payload;
    const { data } = yield call(api.post, 'tasks', { title });

    yield put(saveTaskSuccess(data));
  } catch (e) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signOut());
  }
}

export function* doneUndoneTask({ payload }) {
  try {
    const { task } = payload;

    if (task.done) {
      yield call(api.put, `tasks/${task._id}/undone`);
    } else {
      yield call(api.put, `tasks/${task._id}/done`);
    }

    yield put(doneUndoneTaskSuccess({ ...task, done: !task.done }));
  } catch (e) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signOut());
  }
}

export function* deleteTask({ payload }) {
  try {
    const { task } = payload;

    yield call(api.delete, `tasks/${task._id}`);

    yield put(deleteTaskSuccess(task));
  } catch (e) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signOut());
  }
}

export default all([
  takeLatest('@task/SAVE_REQUEST', saveTask),
  takeLatest('@task/DONE_UNDONE_TASK_REQUEST', doneUndoneTask),
  takeLatest('@task/DELETE_REQUEST', deleteTask),
]);
