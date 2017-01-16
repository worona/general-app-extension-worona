import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as deps from '../deps';

export default function* generalAppSagas() {
  yield [
    takeEvery(
      ({ type, fields }) => type === deps.types.SETTINGS_UPDATED && fields.numberOfPosts,
      function*({ fields: { numberOfPosts } }) {
        yield put(deps.actions.postParamsChanged({ params: { per_page: numberOfPosts } }));
      },
    ),
  ];
}
