import { SET_COPY_DATA } from "../actions/setData";

export const setCopyDataAction = (data) => {
  return {
    type: SET_COPY_DATA,
    payload: data,
  };
};
