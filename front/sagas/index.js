import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
  delay,
} from "redux-saga/effects";
import axios from "axios";

// fork나 call로 제너레이터 함수를 실행하는 것
export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
