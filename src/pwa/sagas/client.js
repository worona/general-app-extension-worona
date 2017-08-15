import { fork } from 'redux-saga/effects';
import postParamsChange from './connection-params';

export default function* wpOrgConnectionClientSaga() {
  yield fork(postParamsChange);
}
