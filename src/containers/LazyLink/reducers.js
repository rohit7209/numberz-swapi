import { LL_REQUEST_DETAILS, LL_REQUEST_DETAILS_DONE, LL_RESET } from './constants';


const defaultState = {
  requesting: null,
  details: {},
};

export const LazyLinkReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LL_REQUEST_DETAILS:
      return {
        ...state,
        requesting: true,
        details: {
          ...state.details,
          [action.payload.type]: null,
        },
      };
    case LL_REQUEST_DETAILS_DONE:
      return {
        ...state,
        requesting: false,
        details: {
          ...state.details,
          [action.payload.type]: action.payload.data,
        }
      };
    case LL_RESET:
      return {
        ...defaultState,
      };
    default:
      return state
  }
};
