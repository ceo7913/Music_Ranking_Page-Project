import { SET_SORT_TYPE } from './types';

export const setSortType = (type) => ({
  type: SET_SORT_TYPE,
  payload: type,
});