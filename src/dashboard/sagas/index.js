import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import * as deps from '../deps';

export function* saveDefaults(action) {
  const { siteId } = action;
  const site = yield select(deps.selectors.getSite(siteId));
  yield put(deps.actions.saveSettingsRequested({
    title: site.name,
    numberOfPosts: 10,
  }, {
    name: 'general-app-extension-worona',
    siteId,
  }));
}

export default function* setDefaultSettingsSagaWatcher() {
  yield takeEvery(action => action.type === deps.types.DEFAULT_SETTINGS_NEEDED
    && action.name === 'general-app-extension-worona',
    saveDefaults);
}
