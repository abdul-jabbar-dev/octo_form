import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FormStore, MainForm, MainFormCreate } from "@/types/forms/createForms";

const initialState: FormStore = {
  draft: [],
  published: [],
};

export const FormSlice = createSlice({
  name: "FORMS",
  initialState,
  reducers: {
    SaveDraft: (state, action: PayloadAction<MainFormCreate>) => {
      state.draft.push(action.payload);
    },
    updateDraft: (state, action: PayloadAction<MainForm>) => {
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

export const { SaveDraft, updateDraft, PublishForm } = FormSlice.actions;

export default FormSlice.reducer;
