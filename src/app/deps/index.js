import { dep } from 'worona-deps';

export const types = {
  get SETTINGS_UPDATED() { return dep('settings', 'types', 'SETTINGS_UPDATED'); },
};

export const selectorCreators = {
  get getSetting() { return dep('settings', 'selectorCreators', 'getSetting'); },
};

export const actions = {
  get postsParamsChanged() { return dep('connection', 'actions', 'postsParamsChanged'); },
  get refreshPostsRequested() { return dep('connection', 'actions', 'refreshPostsRequested'); },
};
