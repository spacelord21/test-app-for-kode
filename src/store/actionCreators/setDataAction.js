import {
  SET_DATA_FAILURE,
  SET_DATA_STARTED,
  SET_DATA_SUCCESS,
} from "../actions/setData";

export const setDataStartedAction = () => {
  return {
    type: SET_DATA_STARTED,
  };
};

export const setDataSucessAction = (data) => {
  return {
    type: SET_DATA_SUCCESS,
    payload: data,
  };
};

export const setDataFailureAction = (error) => {
  return {
    type: SET_DATA_FAILURE,
    payload: error,
  };
};
