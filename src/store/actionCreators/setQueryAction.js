import { SET_SEARCH_DATA, SET_SEARCH_QUERY } from "../actions/setSearchQuery";

export const setSearchQueryAction = (query) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  };
};

export const setSearchDataAction = (data) => {
  return {
    type: SET_SEARCH_DATA,
    payload: data,
  };
};
