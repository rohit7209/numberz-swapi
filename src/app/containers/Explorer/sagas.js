import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { EX_REQUEST_TYPE_LIST } from './constants';
import { requestTypeListDone } from './actions';
import CONSTANTS from './../../utils/constants';

function requestTypeListAPI(payload) {
  return axios({
    method: 'GET',
    url: `${CONSTANTS.baseApi}${payload.type}?page=${payload.page}`
  });
}

function* requestTypeListFlow(action) {
  try {
    const response = yield call(requestTypeListAPI, action.payload);
    const payload = response.data;
    yield put(requestTypeListDone(payload));
  } catch (error) {
    yield put(requestTypeListDone(error));
  }
}

export function* explorerSaga() {
  yield takeLatest(EX_REQUEST_TYPE_LIST, requestTypeListFlow);
}
