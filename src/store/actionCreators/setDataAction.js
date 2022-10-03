import { SET_DATA } from "../actions/setData";

export const setDataAction = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};
