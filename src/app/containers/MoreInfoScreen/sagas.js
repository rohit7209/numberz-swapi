import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { MS_REQUEST_MORE_DETAILS } from './constants';
import { requestMoreDetailsDone } from './actions';
import CONSTANTS from './../../utils/constants';

function requestDetailsAPI(payload) {
  return axios({
    method: 'GET',
    url: `${CONSTANTS.baseApi}${payload.type}/${payload.id}`,
  });
}

function* requestDetailsFlow(action) {
  try {
    const response = yield call(requestDetailsAPI, action.payload);
    const payload = response.data;
    yield put(requestMoreDetailsDone(payload));
  } catch (error) {
    yield put(requestMoreDetailsDone({ error }));
  }
}

export function* moreInfoSaga() {
  yield takeLatest(MS_REQUEST_MORE_DETAILS, requestDetailsFlow);
}
