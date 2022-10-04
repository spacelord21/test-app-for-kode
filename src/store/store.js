import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { activeCategoryReducer } from "./reducers/activeCategoryReducer";
import { activeSortTypeReducer } from "./reducers/activeSortTypeReducer";
import { dataReducer } from "./reducers/dataReducer";
import { searchQueryReducer } from "./reducers/searchQueryReducer";

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  categoryReducer: activeCategoryReducer,
  queryReducer: searchQueryReducer,
  sortTypeReducer: activeSortTypeReducer,
});

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({ reducer: rootReducer, middleware });
