import { AnyAction, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { ThunkAction } from "redux-thunk";
import { reducer as movieReducer } from "../slices";

export const store = configureStore({
  reducer: {
    movies: movieReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, ApplicationState, unknown, AnyAction>;

export const useSelector: TypedUseSelectorHook<ApplicationState> =
  useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;
