// @ts-nocheck
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import * as api from "../api/blogs";
import { constants } from "../modules/blogs";

function* getAllBlogs(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getAllBlogs);
    yield put({ type: constants.GET_ALL_BLOGS.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_ALL_BLOGS.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getBlogsCount(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getBlogsCount);
    yield put({ type: constants.GET_BLOGS_COUNT.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_BLOGS_COUNT.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getBlogById(action: () => any): SagaIterator {
  try {
    const payload = yield call(api.getBlogById);
    yield put({ type: constants.GET_BLOG_BY_ID.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_BLOG_BY_ID.FAILED,
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
      type: constants.FETCH_ALL_ADDRESS.FAILED,
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

function* watchGetAllBlogs() {
  yield takeLatest(constants.GET_ALL_BLOGS.ACTION, getAllBlogs);
}

function* watchGetBlogsCount() {
  yield takeLatest(constants.GET_BLOGS_COUNT.ACTION, getBlogsCount);
}

function* watchGetBlogById() {
  yield takeLatest(constants.GET_BLOG_BY_ID.ACTION, getBlogById);
}

function* watchGetEventById() {
  yield takeLatest(constants.GET_EVENT_BY_ID.ACTION, getEventById);
}

function* watchGetLaunchById() {
  yield takeLatest(constants.GET_LAUNCH_BY_ID.ACTION, getLaunchById);
}

export function* rootSaga() {
  yield all([
    fork(watchGetAllBlogs),
    fork(watchGetBlogsCount),
    fork(watchGetBlogById),
    fork(watchGetEventById),
    fork(watchGetLaunchById),
  ]);
}
