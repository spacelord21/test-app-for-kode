import {
  SET_ACTIVE_SORT_TYPE,
  SET_VISIBLE_MODAL_WINDOW,
} from "../actions/setActiveSortType";

const initialState = { sortType: "alphabetical", visible: false };

export const activeSortTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SORT_TYPE:
      return { ...state, sortType: action.payload };
    case SET_VISIBLE_MODAL_WINDOW:
      return { ...state, visible: action.payload };
    default:
      return state;
  }
};
