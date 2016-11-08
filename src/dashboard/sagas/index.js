import { fork } from 'redux-saga/effects';

function* logSaga() {
  console.log('General App package sagas running!');
}

export default function* testSagas() {
  yield [
    fork(logSaga),
  ];
}
