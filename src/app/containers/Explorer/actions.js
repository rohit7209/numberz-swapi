import { EX_REQUEST_TYPE_LIST, EX_REQUEST_TYPE_LIST_DONE } from './constants';

export const requestTypeList = payload => ({
  type: EX_REQUEST_TYPE_LIST,
  payload,
});

export const requestTypeListDone = payload => ({
  type: EX_REQUEST_TYPE_LIST_DONE,
  payload,
});
