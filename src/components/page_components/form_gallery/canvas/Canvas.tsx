'use client'
import { RightClickMenu } from '@/components/edit_form/EditPage'
import { Block } from '@/types/forms/createForms'
import React, { useEffect, useState } from 'react'
import { BlockRenderer } from './BlockRenderer'

export default function Canvas() {
    const [blocks, setBlocks] = useState<Block[]>([])
    useEffect(() => {
        console.log("Canvas blocks updated:", blocks)
    }, [blocks])
    const updateBlock = (index: number, updated: Block) => {
        console.log("Updating block at index:", index, "with:", updated)
        const newBlocks = [...blocks]
        newBlocks[index] = updated
        setBlocks(newBlocks)
    }

    return (
        <div className="container mx-auto px-6 min-h-60">
            <RightClickMenu SetBlocks={setBlocks} blocks={blocks}>
                <div className="rounded border-dashed border-2 border-gray-300 w-full h-full p-4">
                    {blocks.map((block, i) => (
                        <div key={block.id} className="mb-4">
                            <BlockRenderer
                                block={block}
                                onUpdate={(updated: Block) => updateBlock(i, updated)}
                            />
                        </div>
                    ))}
                </div>
            </RightClickMenu>
        </div>
    )
}
