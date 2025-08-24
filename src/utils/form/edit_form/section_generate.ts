import { Block } from "@/types/forms/createForms";
import { GenerateBlockId } from "../generate/block_generate";

export const handleAddSection = ({
  blocks,
  SetBlocks,
  setOpen,
}: {
  SetBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  blocks: Block[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const newBlock: Block = {
    id: GenerateBlockId("section"),
    serialNumber: blocks.length + 1,
    type: "section",
    content: [],
    sectionMeta: {},
  };
  SetBlocks([...blocks, newBlock]);
  setOpen(false);
};

export const handleAddText = ({
  blocks,
  SetBlocks,
  setOpen,
}: {
  SetBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  blocks: Block[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const newBlock: Block = {
    id: GenerateBlockId("text"),
    serialNumber: blocks.length + 1,
    type: "text",
    content: "",
    style: {},
  };
  SetBlocks([...blocks, newBlock]);
  setOpen(false);
};
export const handleAddQuestion = ({
  blocks,
  SetBlocks,
  setOpen,
}: {
  SetBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  blocks: Block[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const newBlock: Block = {
    id: GenerateBlockId("question"),
    serialNumber: blocks.length + 1,
    type: "question",
    answer: {
      field: { type: "text" },
    },
    questionTitle: null,
  };
  SetBlocks([...blocks, newBlock]);
  setOpen(false);
};

export const handleAddMedia = ({
  type,
  blocks,
  SetBlocks,
  setOpen,
}: {
  type: "video" | "image";
  SetBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  blocks: Block[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const newBlock: Block = {
    id: GenerateBlockId(type),
    serialNumber: blocks.length + 1,
    type: type,
    url: "",
    caption: "",
  };
  SetBlocks([...blocks, newBlock]);
  setOpen(false);
};
