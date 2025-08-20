import { MainForm } from "@/types/forms/createForms";
import { RootState } from "../store";

export const getDraftForms = (state: RootState): MainForm[] => {
  return state.forms.list.filter((form) => form.status === "DRAFT");
};
export const getSessiontForm = (state: RootState): MainForm | null => {
  return state.forms.session;
};

export const isItSessionDraft = (state: RootState, formId: string): boolean => {
  return state.forms.list.some(
    (form) => form.formId === formId && form.status === "SESSION_DRAFT"
  );
};

export const getFormById = (state: RootState, formId: string) =>
  state.forms.list.find((form) => form.formId === formId) || null;

export const getForms = (state: RootState) => {
  return [...state.forms.list];
};

export const getPublishedForms = (state: RootState): MainForm[] => {
  return state.forms.list.filter((form) => form.status === "PUBLISHED");
};
