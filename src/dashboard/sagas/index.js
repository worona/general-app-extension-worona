import { takeEvery } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';
import * as deps from '../deps';

export function* saveDefaults(action) {
  if (action.name === 'general-app-extension-worona') {
    yield put(deps.actions.saveSettingsRequested({
      title: 'Worona Demo',
      numberOfPosts: 10,
    }, {
      name: 'general-app-extension-worona',
      siteId: action.siteId, // This is optional when editing a site.
    }));
  }
}

function* logSaga() {
  console.log('General App package sagas running!');
}

export default function* testSagas() {
  yield [
    takeEvery(deps.types.DEFAULT_SETTINGS_NEEDED, saveDefaults),
    fork(logSaga),
  ];
}
