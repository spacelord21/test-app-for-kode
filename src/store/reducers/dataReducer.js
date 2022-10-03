import { GET_DATA } from "../actions/getData";
import { SET_DATA } from "../actions/setData";

const initialState = { data: [] };

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case GET_DATA:
      return state;
    default:
      return state;
  }
};
