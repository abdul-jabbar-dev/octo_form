import { configureStore } from "@reduxjs/toolkit";
import { FormSlice } from "./features/forms/formSlice";

export const store = configureStore({
  reducer: {
    forms: FormSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
