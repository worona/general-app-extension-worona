import { dep } from 'worona-deps';

export const types = {
  get SETTINGS_UPDATED() { return dep('settings', 'types', 'SETTINGS_UPDATED'); },
};

export const selectorCreators = {
  get getSetting() { return dep('settings', 'selectorCreators', 'getSetting'); },
};

export const actions = {
  get postParamsChanged() { return dep('connection', 'actions', 'postParamsChanged'); },
  get refreshPostsRequested() { return dep('connection', 'actions', 'refreshPostsRequested'); },
};
