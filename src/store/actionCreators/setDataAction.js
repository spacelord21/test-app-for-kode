import {
  SET_COPY_DATA,
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

export const setCopyDataAction = (data) => {
  return {
    type: SET_COPY_DATA,
    payload: data,
  };
};
