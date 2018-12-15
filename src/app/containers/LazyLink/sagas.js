import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { LL_REQUEST_DETAILS } from './constants';
import { requestDetailsDone } from './actions';
import CONSTANTS from './../../utils/constants';

function requestDetailsAPI(payload) {
  return axios.all(payload.list.map(url => axios.get(url)))
    .then(axios.spread((...results) => results))
    .catch(error => console.log(error));
}

function* requestDetailsFlow(action) {
  try {
    const response = yield call(requestDetailsAPI, action.payload);
    const data = response;

    yield put(requestDetailsDone({ data, type: action.payload.type }));
  } catch (error) {
    yield put(requestDetailsDone(error));
  }
}

export function* lazyLinkSaga() {
  yield takeEvery(LL_REQUEST_DETAILS, requestDetailsFlow);
}
