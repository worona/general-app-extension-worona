import { dep } from 'worona-deps';

export const types = {
  get SETTINGS_UPDATED() { return dep('settings', 'types', 'SETTINGS_UPDATED'); },
};

export const actions = {
  get postParamsChanged() { return dep('connection', 'actions', 'postParamsChanged'); },
};
