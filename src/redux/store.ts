import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import events from "./eventSlice/slice";
import filter from "./filterSlice/slice";

export const store = configureStore({
  reducer: {
    events,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
