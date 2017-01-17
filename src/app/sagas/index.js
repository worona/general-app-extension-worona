import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import * as deps from '../deps';

export function* updateNumberOfPosts({ fields: { numberOfPosts } }) {
  yield [
    put(deps.actions.postParamsChanged({ params: { per_page: numberOfPosts } })),
    put(deps.actions.refreshPostsRequested()),
  ];
}

export default function* generalAppSagas() {
  const initialNumberOfPosts = yield select(
    deps.selectorCreators.getSetting('generalApp', 'numberOfPosts'),
  );
  yield [
    put(deps.actions.postParamsChanged({ params: { per_page: initialNumberOfPosts } })),
    takeEvery(
      ({ type, fields }) =>
        type === deps.types.SETTINGS_UPDATED && fields.numberOfPosts &&
          fields.numberOfPosts !== initialNumberOfPosts,
      updateNumberOfPosts,
    ),
  ];
}
