import { SET_COPY_DATA } from "../actions/setData";

const initialState = {
  copyData: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COPY_DATA:
      return { ...state, copyData: action.payload };

    default:
      return state;
  }
};
