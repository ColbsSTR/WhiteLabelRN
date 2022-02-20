import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN } from '../Actions/ActionTypes';
import { login_start, login_succeed, login_fail } from '../Actions/Authentication';

export function* authenticationWatcher() {
  yield takeLatest(LOGIN, authenticationWorker);
}

export function* authenticationWorker() {
  yield put(login_start());

  try {
    // *** THIS IS WHERE THE SERVICE CALL TO FIREBASE WOULD BE MADE *** //
    const user = { signedIn: true, authData: {}};
    yield put(login_succeed(user));
  } catch (err) {
    yield put(login_fail(err));
  }
}