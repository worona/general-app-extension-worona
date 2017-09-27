import { spawn } from 'redux-saga/effects';
import postParamsChange from './connection-params';

export default function* wpOrgConnectionServerSaga() {
  // Spawn postsParamsChange so we don't block the server promise.
  yield spawn(postParamsChange);
}
