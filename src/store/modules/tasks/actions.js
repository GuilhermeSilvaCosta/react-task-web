export function tasksRequest() {
  return {
    type: '@tasks/LIST_REQUEST',
  };
}

export function tasksSuccess(tasks) {
  return {
    type: '@tasks/LIST_SUCCESS',
    payload: { tasks },
  };
}
