import produce from 'immer';

const INITIAL_STATE = {
  list: [],
  loading: false,
};

export default function tasks(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@tasks/LIST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@tasks/LIST_SUCCESS': {
        draft.list = action.payload.tasks;
        draft.loading = false;
        break;
      }
      case '@task/SAVE_SUCCESS': {
        draft.list = [...draft.list, action.payload.task];
        break;
      }
      case '@task/DONE_UNDONE_TASK_SUCCESS': {
        draft.list = draft.list
          .map(task => (task._id === action.payload.task._id ? action.payload.task : task));
        break;
      }
      case '@task/DELETE_SUCCESS': {
        draft.list = draft.list
          .filter(task => (task._id !== action.payload.task._id));
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.list = [];
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
