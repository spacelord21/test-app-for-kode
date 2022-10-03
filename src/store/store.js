import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { dataReducer } from "./reducers/dataReducer";

const rootReducer = combineReducers({ data: dataReducer });

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({ reducer: rootReducer, middleware });
