import { SET_ACTIVE_CATEGORY } from "../actions/setActiveCategory";

export const setActiveCategoryAction = (category) => {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: category,
  };
};
