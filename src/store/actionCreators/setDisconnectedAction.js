import {
  SET_DISCONNECTED,
  SET_CONNECTION_LOADING,
} from "../actions/setDisconnected";

export const setDisconnectedAction = (value) => {
  return {
    type: SET_DISCONNECTED,
    payload: value,
  };
};

export const setConnectionLoadingAction = (value) => {
  return {
    type: SET_CONNECTION_LOADING,
    payload: value,
  };
};
