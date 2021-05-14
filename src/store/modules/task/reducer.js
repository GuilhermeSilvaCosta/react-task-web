import produce from 'immer';

const INITIAL_STATE = {
  show: false,
  data: {},
  loading: false,
};

export default function task(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@task/NEW': {
        draft.show = true;
        break;
      }
      case '@task/CANCEL': {
        draft.show = false;
        break;
      }
      case '@task/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@task/SAVE_SUCCESS': {
        draft.loading = false;
        draft.data = {};
        draft.show = false;
        break;
      }
      case '@task/DONE_UNDONE_TASK_REQUEST': {
        draft.loading = true;
        draft.data = action.payload.task;
        break;
      }
      case '@task/DONE_UNDONE_TASK_SUCCESS': {
        draft.loading = false;
        draft.data = {};
        break;
      }
      case '@task/DELETE_REQUEST': {
        draft.loading = true;
        draft.data = action.payload.task;
        break;
      }
      case '@task/DELETE_SUCCESS': {
        draft.loading = false;
        draft.data = {};
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.show = false;
        draft.loading = false;
        draft.data = {};
        break;
      }
      default:
    }
  });
}
