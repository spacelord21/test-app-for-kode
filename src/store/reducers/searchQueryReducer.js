import { SET_SEARCH_DATA, SET_SEARCH_QUERY } from "../actions/setSearchQuery";

const initialState = { query: "", searchData: [] };

export const searchQueryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, query: action.payload };
    case SET_SEARCH_DATA:
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
};
