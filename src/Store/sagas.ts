/**
 * Below Code snippet is meant for async functions, but not required
 *
 *  */

import { takeEvery, put } from "redux-saga/effects";
import { CHANGE_USER } from "./actions";

function* putData(data: { data: string; type: string }) {
  yield put({ type: CHANGE_USER, data });
}

export default function* rootSaga() {
  yield takeEvery("CHANGE_USER_SAGA", putData);
}
