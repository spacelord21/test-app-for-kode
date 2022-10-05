import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { combineReducers } from "redux";
import { usersApi } from "../services/usersApi";
import { activeCategoryReducer } from "./reducers/activeCategoryReducer";
import { activeSortTypeReducer } from "./reducers/activeSortTypeReducer";
import { dataReducer } from "./reducers/dataReducer";
import { disconnectedReducer } from "./reducers/disconnectedReducer";
import { searchQueryReducer } from "./reducers/searchQueryReducer";

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  categoryReducer: activeCategoryReducer,
  queryReducer: searchQueryReducer,
  sortTypeReducer: activeSortTypeReducer,
  disconnectedReducer: disconnectedReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
