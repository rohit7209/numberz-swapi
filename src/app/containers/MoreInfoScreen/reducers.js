import {
  MS_REQUEST_MORE_DETAILS,
  MS_REQUEST_MORE_DETAILS_DONE,
  MS_RESET,
} from './constants';


const defaultState = {
  requesting: null,
  details: null,
};

export const MoreInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MS_REQUEST_MORE_DETAILS:
      return {
        ...state,
        requesting: true,
      };
    case MS_REQUEST_MORE_DETAILS_DONE:
      return {
        ...state,
        requesting: false,
        details: action.payload,
      };
    case MS_RESET:
      return {
        ...defaultState,
      };
    default:
      return state
  }
};
