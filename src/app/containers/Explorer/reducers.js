import { EX_REQUEST_TYPE_LIST, EX_REQUEST_TYPE_LIST_DONE } from './constants';


const defaultState = {
  requesting: null,
  list: [],
};

export const ExplorerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EX_REQUEST_TYPE_LIST:
      return {
        ...state,
        requesting: true,
      };
    case EX_REQUEST_TYPE_LIST_DONE:
      return {
        ...state,
        list: action.payload.results,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        requesting: false,
      };
    default:
      return state
  }
};
