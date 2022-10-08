import { all, fork } from "redux-saga/effects";

import postSaga from "./post";
import userSaga from "./user";

// fork나 call로 제너레이터 함수(*)를 실행하는 것
export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
