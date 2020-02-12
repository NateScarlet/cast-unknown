export const IS_TESTING_WITHOUT_MOMENT = ((): boolean => {
  try {
    require('moment');
  } catch {
    return true;
  }
  return Object.keys(require('moment')).length === 0;
})();
