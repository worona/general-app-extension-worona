import { select, put } from 'redux-saga/effects';
import { dep } from 'worona-deps';

export default function* postParamsChange() {
  // Deps.
  const getSetting = dep('settings', 'selectorCreators', 'getSetting');
  const postsParamsChanged = dep('connection', 'actions', 'postsParamsChanged');
  // Retrieve number of posts and configure the WP-API setting.
  const numberOfPosts = yield select(getSetting('generalApp', 'numberOfPosts'));
  yield put(postsParamsChanged({ params: { per_page: numberOfPosts } }));
}
