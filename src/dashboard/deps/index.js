import { dep } from 'worona-deps';

export const elements = {
  get Button() { return dep('theme', 'elements', 'Button'); },
  get Input() { return dep('theme', 'elements', 'Input'); },
  get RootContainer() { return dep('theme', 'elements', 'RootContainer'); },
};

export const actions = {
  get saveSettingsRequested() { return dep('settings', 'actions', 'saveSettingsRequested'); },
};

export const selectorCreators = {
  get getSettingCreator() { return dep('settings', 'selectorCreators', 'getSettingCreator'); },
};

export const types = {
  get DEFAULT_SETTINGS_NEEDED() { return dep('settings', 'types', 'DEFAULT_SETTINGS_NEEDED'); },
};

export const selectors = {
  get getSite() { return dep('sites', 'selectors', 'getSite'); },
};
