import { fork } from 'redux-saga/effects';

function* logSaga() {
  console.log('General app extension saga running!');
}

export default function* testSagas() {
  yield [
    fork(logSaga),
  ];
}
