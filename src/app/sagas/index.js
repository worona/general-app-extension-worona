import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import * as deps from '../deps';

export function* updateNumberOfPosts({ fields: { numberOfPosts } }) {
  yield put(deps.actions.postsParamsChanged({ params: { per_page: numberOfPosts } }));
}

export default function* generalAppSagas() {
  const numberOfPosts = yield select(
    deps.selectorCreators.getSetting('generalApp', 'numberOfPosts'),
  );
  yield [
    put(deps.actions.postsParamsChanged({ params: { per_page: numberOfPosts } })),
    takeEvery(
      ({ type, fields }) => type === deps.types.SETTINGS_UPDATED && fields.numberOfPosts,
      updateNumberOfPosts,
    ),
  ];
}
