import {
  SET_ACTIVE_SORT_TYPE,
  SET_VISIBLE_MODAL_WINDOW,
} from "../actions/setActiveSortType";

export const setActiveSortTypeAction = (sortType) => {
  return {
    type: SET_ACTIVE_SORT_TYPE,
    payload: sortType,
  };
};

export const setVisibleModalWindowAction = (visible) => {
  return {
    type: SET_VISIBLE_MODAL_WINDOW,
    payload: visible,
  };
};
