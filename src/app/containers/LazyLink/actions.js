import {
  LL_REQUEST_DETAILS,
  LL_REQUEST_DETAILS_DONE,
  LL_RESET,
} from './constants';

export const reset = payload => ({
  type: LL_RESET,
  payload,
});


export const requestDetails = payload => ({
  type: LL_REQUEST_DETAILS,
  payload,
});

export const requestDetailsDone = payload => ({
  type: LL_REQUEST_DETAILS_DONE,
  payload,
});
