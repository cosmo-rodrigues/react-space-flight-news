// @ts-nocheck
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as api from "../api/info";
import { constants } from "../modules/info";

function* getSitesNameList(action) {
  try {
    const payload = yield call(api.getSitesNameList, action.payload);
    yield put({ type: constants.GET_SITES_NAME_LIST.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_SITES_NAME_LIST.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* watchGetSitesNameList() {
  yield takeLatest(constants.GET_SITES_NAME_LIST.ACTION, getSitesNameList);
}

export function* rootSaga() {
  yield all([fork(watchGetSitesNameList)]);
}
