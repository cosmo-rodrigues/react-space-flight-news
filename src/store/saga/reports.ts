// @ts-nocheck
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import * as api from "../api/reports";
import { constants } from "../modules/reports";

function* getAllReports(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getAllReports);
    yield put({ type: constants.GET_ALL_REPORTS.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_ALL_REPORTS.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getReportsCount(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getReportsCount);
    yield put({ type: constants.GET_REPORTS_COUNT.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_REPORTS_COUNT.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getReportById(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getReportById);
    yield put({ type: constants.GET_REPORT_BY_ID.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_REPORT_BY_ID.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* watchGetAllReports() {
  yield takeLatest(constants.GET_ALL_REPORTS.ACTION, getAllReports);
}

function* watchGetReportsCount() {
  yield takeLatest(constants.GET_REPORTS_COUNT.ACTION, getReportsCount);
}

function* watchGetReportById() {
  yield takeLatest(constants.GET_REPORT_BY_ID.ACTION, getReportById);
}

export function* rootSaga() {
  yield all([
    fork(watchGetAllReports),
    fork(watchGetReportsCount),
    fork(watchGetReportById),
  ]);
}
