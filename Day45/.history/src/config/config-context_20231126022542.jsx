// config-context.js
export let globalConfig = {
  MIN_NUMBER: 1,
  MAX_TURN: 7,
  MAX_NUMBER: 100,
};

export const setGlobalConfig = (newConfig) => {
  globalConfig = { ...globalConfig, ...newConfig };
};
