import {
  MS_REQUEST_MORE_DETAILS,
  MS_REQUEST_MORE_DETAILS_DONE,
  MS_RESET,
} from './constants';

export const reset = (payload) => ({
  type: MS_RESET,
  payload,
});

export const requestMoreDetails = (payload) => ({
  type: MS_REQUEST_MORE_DETAILS,
  payload,
});

export const requestMoreDetailsDone = (payload) => ({
  type: MS_REQUEST_MORE_DETAILS_DONE,
  payload,
});
