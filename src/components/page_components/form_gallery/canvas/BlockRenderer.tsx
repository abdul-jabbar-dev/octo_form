'use client';
import React from "react";
import { Block } from "@/types/forms/createForms";
import SectionCase from "./blocks/SectionCase";
import { QuestionCase } from "./blocks/QuestionCase";
import { TextInputWrapper } from "./blocks/TextInputWrapper";

// 🔹 Main Recursive Renderer
export const BlockRenderer = ({ block, onUpdate }: { block: Block; onUpdate: (block: Block) => unknown }) => {

    switch (block.type) {
        // case "text":
        //     return <TextInputWrapper onUpdate={(updatedSection) => onUpdate?.(updatedSection)} block={block} />;
        case "question":
            return <QuestionCase onUpdate={(updatedSection) => onUpdate?.(updatedSection)} block={block} />;
        case "section":
            return <SectionCase onUpdate={(updatedSection) => onUpdate?.(updatedSection)} block={block} />;
        case "divider":
            return <hr className="my-4 border-gray-300" />;
        case "image":
            return (
                <div className="my-2">
                    <img src={block.url} alt={block.caption || "image"} className="rounded-md max-h-60" />
                    {block.caption && <p className="text-sm text-gray-500">{block.caption}</p>}
                </div>
            );
        case "video":
            return (
                <div className="my-2">
                    <video src={block.url} controls className="rounded-md max-h-60 w-full" />
                    {block.caption && <p className="text-sm text-gray-500">{block.caption}</p>}
                </div>
            );
        default:
            return <div>Unknown Block</div>;
    }
};
