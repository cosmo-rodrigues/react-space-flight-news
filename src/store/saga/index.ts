import { all, fork } from "redux-saga/effects";

import { rootSaga as articles } from "./articles";
import { rootSaga as blogs } from "./blogs";
import { rootSaga as info } from "./info";
import { rootSaga as reports } from "./reports";

export function* rootSaga() {
  yield all([fork(articles), fork(blogs), fork(info), fork(reports)]);
}
