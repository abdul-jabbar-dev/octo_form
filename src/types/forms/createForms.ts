export interface FormStore {
  draft: MainFormCreate[];
  published: MainForm[];
}

// Block types
type TextBlock = {
  id: string;
  type: "text";
  content: string | string[];
  style?: {
    fontSize?: string;
    color?: string;
    fontWeight?: "normal" | "bold" | "bolder" | "lighter";
    fontStyle?: "normal" | "italic";
    textDecoration?: "none" | "underline" | "line-through";
    textAlign?: "left" | "center" | "right" | "justify";
    listType?: "none" | "bullet" | "number";
  };
};

type ImageBlock = {
  id: string;
  type: "image";
  url: string;
  caption?: string;
};

type VideoBlock = {
  id: string;
  type: "video";
  url: string;
  caption?: string;
};

type DividerBlock = {
  id: string;
  type: "divider";
};

type QuestionBlock = {
  id: string;
  type: "question";
  questionType: "text" | "textarea" | "radio" | "checkbox" | "dropdown";
  label: TextBlock;       // styled question text
  options?: TextBlock[];  // each option can also have style
  required?: boolean;
};

// Notion-style block (can be extended with nested blocks)
type Block = TextBlock | ImageBlock | VideoBlock | DividerBlock | QuestionBlock;

// Main form type
export type MainForm = {
  formId: string;
  id: string;
  title: string;
  authorId: string;
  version: number;
  blocks: Block[]; // blocks array for notion-style flexible layout
  createdAt: string;
  updatedAt: string;
  status: "DRAFT" | "PUBLISHED";
};
export type MainFormCreate = {
  formId: string;
  title: string;
  authorId: string;
  version?: number;
  blocks: Block[];
  status: "DRAFT" | "PUBLISHED";
};
