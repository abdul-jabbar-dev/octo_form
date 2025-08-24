"use client";

import { useState, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Block } from "@/types/forms/createForms";
import {  handleAddMedia, handleAddQuestion, handleAddSection, handleAddText } from "@/utils/form/edit_form/section_generate";


export function RightClickMenu({
  children,
  SetBlocks,
  blocks,
}: {
  children: React.ReactNode;
  SetBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  blocks: Block[];
}) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setOpen(true);
  };

  return (
    <div className="w-full h-full" onContextMenu={handleContextMenu}>
      {/* DropdownMenu */}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <div
            ref={triggerRef}
            className="absolute"
            style={{ left: position.x, top: position.y, width: 0, height: 0 }}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => handleAddSection({ SetBlocks, blocks, setOpen })}>
              New Section
              {/* <DropdownMenuShortcut>⌘A</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => handleAddText({ SetBlocks, blocks, setOpen })}>
              Text
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleAddMedia({ type: "image", SetBlocks, blocks, setOpen })}>
              Image
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleAddMedia({ type: "video", SetBlocks, blocks, setOpen })}>
              Video
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleAddQuestion({ SetBlocks, blocks, setOpen })}>
              Question
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => setOpen(false)}>Close</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Render children (e.g., canvas) */}
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
