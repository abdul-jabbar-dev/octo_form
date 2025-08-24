// types/forms.ts

// 🔹 Initial Form State
export type InitaialForm = {
  session: MainForm | null;
  list: MainForm[];
};

// 🔹 Text Block
export type TextBlock = {
  id: string;
  serialNumber: number;
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

// 🔹 Image Block
export type ImageBlock = {
  id: string;
  serialNumber: number;
  type: "image";
  url: string;
  caption?: string;
};

// 🔹 Video Block
export type VideoBlock = {
  id: string;
  serialNumber: number;
  type: "video";
  url: string;
  caption?: string;
};

// 🔹 Divider Block
export type DividerBlock = {
  id: string;
  serialNumber: number;
  type: "divider";
};

// 🔹 Section Block
export type SectionBlock = {
  id: string;
  serialNumber: number;
  type: "section";
  sectionMeta: TextBlock | object;
  content: Block[];
};

// 🔹 Validation Config
export type ValidationConfig = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  minOptions?: number;
  maxOptions?: number;
  pattern?: string; // regex validation
  errorMessage?: string;
};

// 🔹 Answer Field Configuration
export type AnswerField =
  | { type: "text"; placeholder?: string; defaultValue?: string }
  | { type: "textarea"; placeholder?: string; defaultValue?: string }
  | { type: "radio"; options: TextBlock[]; defaultValue?: string }
  | { type: "checkbox"; options: TextBlock[]; defaultValue?: string[] }
  | { type: "dropdown"; options: TextBlock[]; defaultValue?: string }
  | { type: "file"; fileTypes?: string[]; maxSizeMB?: number }
  | { type: "image"; maxCount?: number };

// 🔹 Answer Configuration
export type AnswerConfig = {
  field: AnswerField; // Author-defined input field
  validation?: ValidationConfig;
  answerBlocks?: Block[]; // initially empty, user input stored here
};

// 🔹 Question Block
export type QuestionBlock = {
  id: string;
  serialNumber: number;
  type: "question";

  questionTitle: TextBlock|null;
  descriptionBlocks?: Block[]|null; // optional extra blocks (text, image, video)
  answer: AnswerConfig|null; // field + validation + answerBlocks
};

// 🔹 Union of Blocks
export type Block =
  | TextBlock
  | ImageBlock
  | VideoBlock
  | DividerBlock
  | QuestionBlock
  | SectionBlock;

// 🔹 Main Form
export type MainForm = {
  img: string | null;
  formId: string;
  id?: string;
  title: string;
  authorId: string;
  version: number;
  blocks: Block[];
  createdAt?: string;
  updatedAt?: string;
  status: "DRAFT" | "PUBLISHED" | "SESSION_DRAFT";
};
