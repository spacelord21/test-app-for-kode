import {
  SET_COPY_DATA,
  SET_DATA_FAILURE,
  SET_DATA_STARTED,
  SET_DATA_SUCCESS,
} from "../actions/setData";

const initialState = {
  data: [],
  loading: false,
  error: null,
  copyData: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_STARTED:
      return { ...state, loading: true };
    case SET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case SET_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SET_COPY_DATA:
      return { ...state, copyData: action.payload };

    default:
      return state;
  }
};
