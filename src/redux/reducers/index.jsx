import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, SET_SORT_TYPE } from '../action/types';

const initialState = {
  searchTerm: '',
  sortType: 'name',
};

const searchReducer = (state = initialState.searchTerm, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

const sortReducer = (state = initialState.sortType, action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  searchTerm: searchReducer,
  sortType: sortReducer,
});