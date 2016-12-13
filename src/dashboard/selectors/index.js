import * as deps from '../deps';

export const getTitle = state =>
  deps.selectorCreators.getSettingCreator('general-app-extension-worona')('title')(state);
export const getNumberOfPosts = state =>
  deps.selectorCreators.getSettingCreator('general-app-extension-worona')('numberOfPosts')(state);
