// @ts-nocheck
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import * as api from "../api/articles";
import { constants } from "../modules/articles";

function* getAllArticles(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getAllArticles);
    yield put({ type: constants.GET_ALL_ARTICLES.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_ALL_ARTICLES.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getArticlesCount(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getArticlesCount);
    yield put({ type: constants.GET_ARTICLES_COUNT.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_ARTICLES_COUNT.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getArticleById(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getArticleById);
    yield put({ type: constants.GET_ARTICLE_BY_ID.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_ARTICLE_BY_ID.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getEventById(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getEventById);
    yield put({ type: constants.GET_EVENT_BY_ID.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_EVENT_BY_ID.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getLaunchById(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getLaunchById);
    yield put({ type: constants.GET_LAUNCH_BY_ID.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_LAUNCH_BY_ID.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* watchGetAllArticles() {
  yield takeLatest(constants.GET_ALL_ARTICLES.ACTION, getAllArticles);
}

function* watchGetArticlesCount() {
  yield takeLatest(constants.GET_ARTICLES_COUNT.ACTION, getArticlesCount);
}

function* watchGetArticleById() {
  yield takeLatest(constants.GET_ARTICLE_BY_ID.ACTION, getArticleById);
}

function* watchGetEventById() {
  yield takeLatest(constants.GET_EVENT_BY_ID.ACTION, getEventById);
}

function* watchGetLaunchById() {
  yield takeLatest(constants.GET_LAUNCH_BY_ID.ACTION, getLaunchById);
}

export function* rootSaga() {
  yield all([
    fork(watchGetAllArticles),
    fork(watchGetArticlesCount),
    fork(watchGetArticleById),
    fork(watchGetEventById),
    fork(watchGetLaunchById),
  ]);
}
