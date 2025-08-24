import { Block, SectionBlock, TextBlock } from "@/types/forms/createForms"
import { BlockRenderer } from "../BlockRenderer"
import { useState } from "react"
import { TextInputWrapper } from "./TextInputWrapper"


export default function SectionCase({
  block,
  onUpdate
}: {
  block: SectionBlock
  onUpdate?: (updated: SectionBlock) => void
}) {
  // section title update হলে
  const handleTitleChange = (updatedText: TextBlock) => {
    const updatedSection: SectionBlock = {
      ...block,
      sectionMeta: updatedText,
    }
    onUpdate?.(updatedSection)
  }

  // child block update হলে
  const handleChildUpdate = (idx: number, updatedChild: Block) => {
    const newContent = [...block.content]
    newContent[idx] = updatedChild

    const updatedSection: SectionBlock = {
      ...block,
      content: newContent,
    }
    onUpdate?.(updatedSection)
  }

  return (
    <div className="border-2 border-dashed rounded-xl p-4 my-4">
      <TextInputWrapper
      content={
        (block.sectionMeta && "content" in block.sectionMeta
          ? Array.isArray((block.sectionMeta as TextBlock).content)
            ? ((block.sectionMeta as TextBlock).content as string[]).join(" ")
            : (block.sectionMeta as TextBlock).content as string
          : "") || ""
      }
      onChange={(updatedContent: string) => {
        handleTitleChange({ ...(block.sectionMeta as TextBlock), content: updatedContent });
      }}
      placeholder="Untitled Section"
    />

      <div className="pl-4 mt-2">
        {block.content.map((child, idx) => (
          <BlockRenderer
            key={child.id}
            block={child}
            onUpdate={(updatedChild) => handleChildUpdate(idx, updatedChild)}
          />
        ))}
      </div>
    </div>
  )
}
