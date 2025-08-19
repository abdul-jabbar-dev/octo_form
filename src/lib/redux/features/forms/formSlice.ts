import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FormStore, MainForm, MainFormCreate } from "@/types/forms/createForms";

const initialState: FormStore = {
  sessionDraft: null,
  draft: [],
  published: [],
};

export const FormSlice = createSlice({
  name: "FORMS",
  initialState,
  reducers: {
    // This reducer is used to set the session draft form
    SetSessionDraft: (state, action: PayloadAction<MainFormCreate>) => {
      state.sessionDraft = action.payload;
    },
    CleanSessionDraft: (state) => {
      state.sessionDraft = null;
    },

    // Save a new draft form
    SaveDraft: (
      state,
      action: PayloadAction<MainFormCreate | MainForm | null>
    ) => {
      if (!action.payload) {
        state.draft.unshift(state.sessionDraft!);
        state.sessionDraft = null;
      } else {
        state.draft.push(action.payload);
      }
    },
    UpdateDraft: (state, action: PayloadAction<MainForm>) => {
      const index = state.draft.findIndex(
        (f) => f.formId === action.payload.formId
      );
      if (index >= 0) state.draft[index] = action.payload;
    },
    // getDraft reducer removed; use a selector instead

    PublishForm: (state, action: PayloadAction<MainForm>) => {
      state.published.push(action.payload);
      state.draft = state.draft.filter((form) => form !== action.payload);
    },
  },
});

export const {
  SaveDraft,
  UpdateDraft,
  PublishForm,
  CleanSessionDraft,
  SetSessionDraft,
} = FormSlice.actions;

export default FormSlice.reducer;
