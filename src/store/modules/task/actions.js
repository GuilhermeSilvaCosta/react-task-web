export function newTask() {
  return {
    type: '@task/NEW',
  };
}

export function cancelTask() {
  return {
    type: '@task/CANCEL',
  };
}

export function saveTaskRequest(title) {
  return {
    type: '@task/SAVE_REQUEST',
    payload: { title },
  };
}

export function saveTaskSuccess(task) {
  return {
    type: '@task/SAVE_SUCCESS',
    payload: { task },
  };
}

export function doneUndoneTaskRequest(task) {
  return {
    type: '@task/DONE_UNDONE_TASK_REQUEST',
    payload: { task },
  };
}

export function doneUndoneTaskSuccess(task) {
  return {
    type: '@task/DONE_UNDONE_TASK_SUCCESS',
    payload: { task },
  };
}

export function deleteTaskRequest(task) {
  return {
    type: '@task/DELETE_REQUEST',
    payload: { task },
  };
}

export function deleteTaskSuccess(task) {
  return {
    type: '@task/DELETE_SUCCESS',
    payload: { task },
  };
}
