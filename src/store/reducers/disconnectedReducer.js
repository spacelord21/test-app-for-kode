import {
  SET_DISCONNECTED,
  SET_CONNECTION_LOADING,
} from "../actions/setDisconnected";

const initialState = { isDisconnected: false, disconnectedLoading: false };

export const disconnectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISCONNECTED:
      return {
        ...state,
        isDisconnected: action.payload,
        disconnectedLoading: true,
      };
    case SET_CONNECTION_LOADING:
      return { ...state, disconnectedLoading: action.payload };
    default:
      return state;
  }
};
