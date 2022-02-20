import {all, call} from 'redux-saga/effects';
import { authenticationWatcher } from './Authentication.saga';

export function* rootSaga() {
  yield all([
    call(authenticationWatcher),
  ]);
}