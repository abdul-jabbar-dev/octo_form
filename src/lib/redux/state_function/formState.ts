import { MainFormCreate } from "@/types/forms/createForms";
import { RootState } from "../store";

export const getDraftForms = (state: RootState): MainFormCreate[] => {
  return state.forms.draft;
};
export const getDraftById = (state: RootState, formId: string) =>
  state.forms.draft.find((form) => form.formId === formId) || null;

export const getPublishedForms = (state: RootState): MainFormCreate[] => {
  return state.forms.published;
};
