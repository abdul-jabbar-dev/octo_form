import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { InitaialForm, MainForm } from "@/types/forms/createForms";

const initialState: InitaialForm = {
  session: null,
  list: [],
};
export const FormSlice = createSlice({
  name: "FORMS",
  initialState,
  reducers: {
    // This reducer is used to set the session draft form
    SetSessionDraft: (state, action: PayloadAction<MainForm>) => {
      
      state.session = {
        ...action.payload,
        version: 0,
        status: "SESSION_DRAFT",
      };
    },

    CleanSessionDraft: (state) => {
      state.session = null;
    },

    SaveDraft: (state, action: PayloadAction<MainForm | null>) => {
      state.list.unshift({
        ...(action.payload || state.session!),
        status: "DRAFT",
        createdAt: new Date().toISOString(),
      });
      if (!action.payload) {
        state.session = null;
      }
    },
    UpdateDraft: (state, action: PayloadAction<MainForm>) => {
      const index = state.list.findIndex(
        (f) => f.formId === action.payload.formId
      );
      if (index >= 0)
        state.list[index] = {
          ...action.payload,
          status: "DRAFT",
          updatedAt: new Date().toISOString(),
        };
    },
    // getDraft reducer removed; use a selector instead

    // PublishForm: (state, action: PayloadAction<MainForm>) => {
    //   state.published.push(action.payload);
    //   state.draft = state.draft.filter((form) => form !== action.payload);
    // },
  },
});

export const {
  SaveDraft,
  UpdateDraft,
  // PublishForm,
  CleanSessionDraft,
  SetSessionDraft,
} = FormSlice.actions;

export default FormSlice.reducer;
