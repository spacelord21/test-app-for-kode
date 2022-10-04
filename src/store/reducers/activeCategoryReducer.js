import { SET_ACTIVE_CATEGORY } from "../actions/setActiveCategory";

const initialState = { category: "all" };

export const activeCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
