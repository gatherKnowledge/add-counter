import { all, put, takeEvery, delay, fork } from 'redux-saga/effects';
import { DOUBLE_COUNT_REQUEST, DOUBLE_COUNT_FAILED, DOUBLE_COUNT_SUCCESS, HIDDEN_LOADING, SHOW_LOADING } from './action';

function* doubledCount() {
  try {
    yield delay(1500);
    yield put({ type: DOUBLE_COUNT_SUCCESS });
  } catch (e) {
    yield put({ type: DOUBLE_COUNT_FAILED });
  }
}

function* showLoading() {
  yield put({ type: SHOW_LOADING });
}

function* hiddenLoading() {
  yield put({ type: HIDDEN_LOADING });
}


function* watchDoubleCount() {
  yield takeEvery([DOUBLE_COUNT_REQUEST], showLoading);
  yield takeEvery([DOUBLE_COUNT_REQUEST], doubledCount);
  yield takeEvery([DOUBLE_COUNT_SUCCESS], hiddenLoading);
  yield takeEvery([DOUBLE_COUNT_FAILED], hiddenLoading);
}

export default function* rootSaga() {
  yield all([fork(watchDoubleCount)]);
}