import { Block, QuestionBlock, TextBlock } from "@/types/forms/createForms";
import { useState } from "react";

export const QuestionCase = ({
    block,
    onUpdate,
}: {
    block: QuestionBlock;
    onUpdate: (block: Block) => unknown;
}) => {
    const [editing, setEditing] = useState(true);

    // 🔹 Question Title Update
    const handleTitleChange = (value: string) => {
        const updatedTitle: TextBlock = {
            id: block.id + "-title",
            serialNumber: block.serialNumber,
            type: "text",
            content: value,
        };

        onUpdate({
            ...block,
            questionTitle: updatedTitle,
        });
    };

    // 🔹 Description Update
    const handleDescUpdate = (updatedDesc: Block, idx: number) => {
        const newDescriptions = [...(block.descriptionBlocks || [])];
        newDescriptions[idx] = updatedDesc;
        onUpdate({
            ...block,
            descriptionBlocks: newDescriptions,
        });
    };

    // 🔹 Answer Type Change
    const handleAnswerTypeChange = (
        type: "text" | "textarea" | "checkbox" | "radio" | "dropdown" | "file" | "image"
    ) => {
        let field: any = { type };

        if (type === "radio" || type === "checkbox" || type === "dropdown") {
            field.options = [
                { id: block.id + "-opt1", serialNumber: 1, type: "text", content: "Option 1" },
            ];
        }

        onUpdate({
            ...block,
            answer: { field, validation: {}, answerBlocks: [] },
        });
    };

    // 🔹 Placeholder Update (for text/textarea)
    const handlePlaceholderChange = (placeholder: string) => {
        if (!block.answer) return;
        const { field } = block.answer;
        if (field.type === "text" || field.type === "textarea") {
            onUpdate({
                ...block,
                answer: {
                    ...block.answer,
                    field: { ...field, placeholder },
                },
            });
        }
    };

    return (
        <div className="border rounded p-3 my-2 bg-gray-50">
            {editing ? (
                <>
                    {/* Question Title Input */}
                    <input
                        type="text"
                        className="border px-2 py-1 rounded w-full mb-2"
                        placeholder="Enter Question Title..."
                        value={block.questionTitle?.content as string || ""}
                        onChange={(e) => handleTitleChange(e.target.value)}
                    />

                    {/* Answer Type Selector */}
                    <label className="text-sm font-medium">Answer Type:</label>
                    <select
                        value={block.answer?.field.type || ""}
                        onChange={(e) =>
                            handleAnswerTypeChange(
                                e.target.value as
                                | "text"
                                | "textarea"
                                | "checkbox"
                                | "radio"
                                | "dropdown"
                                | "file"
                                | "image"
                            )
                        }
                        className="ml-2 border rounded px-2 py-1"
                    >
                        <option value="">-- Select Type --</option>
                        <option value="text">Text</option>
                        <option value="textarea">Textarea</option>
                        <option value="checkbox">Checkbox</option>
                        <option value="radio">Multiple Choice</option>
                        <option value="dropdown">Dropdown</option>
                        <option value="file">File Upload</option>
                        <option value="image">Image Upload</option>
                    </select>

                    {/* Extra settings based on type */}
                    {block.answer?.field.type === "text" ||
                        block.answer?.field.type === "textarea" ? (
                        <div className="mt-2">
                            <label className="text-sm font-medium">Placeholder:</label>
                            <input
                                type="text"
                                value={block.answer?.field.placeholder || ""}
                                onChange={(e) => handlePlaceholderChange(e.target.value)}
                                className="ml-2 border rounded px-2 py-1 w-full"
                                placeholder="Enter placeholder..."
                            />
                        </div>
                    ) : null}

                    {/* Options for checkbox/radio/dropdown */}
                    {(block.answer?.field.type === "radio" ||
                        block.answer?.field.type === "checkbox" ||
                        block.answer?.field.type === "dropdown") && (
                            <div className="mt-2">
                                <label className="text-sm font-medium">Options:</label>
                                {block.answer?.field.options?.map((opt: TextBlock, idx: number) => (
                                    <input
                                        key={opt.id}
                                        type="text"
                                        className="border px-2 py-1 rounded w-full mb-1"
                                        value={opt.content as string}
                                        onChange={(e) => {
                                            const newOptions = [...block.answer!.field.options];
                                            newOptions[idx] = {
                                                ...opt,
                                                content: e.target.value,
                                            };
                                            onUpdate({
                                                ...block,
                                                answer: {
                                                    ...block.answer!,
                                                    field: { ...block.answer!.field, options: newOptions },
                                                },
                                            });
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                </>
            ) : (
                // 🔹 Preview Mode
                <div
                    className="mt-2 cursor-pointer"
                    onDoubleClick={() => setEditing(true)}
                >
                    <h4 className="font-medium mb-1">
                        {block.questionTitle?.content || "Untitled Question"}
                    </h4>
                    {block.answer?.field.type === "text" && (
                        <input
                            type="text"
                            placeholder={block.answer?.field.placeholder}
                            className="border px-2 py-1 rounded w-full"
                            disabled
                        />
                    )}
                    {block.answer?.field.type === "textarea" && (
                        <textarea
                            placeholder={block.answer?.field.placeholder}
                            className="border px-2 py-1 rounded w-full"
                            disabled
                        />
                    )}
                    {block.answer?.field.type === "checkbox" &&
                        block.answer.field.options?.map((opt: TextBlock) => (
                            <div className="flex items-center gap-2" key={opt.id}>
                                <input type="checkbox" disabled />
                                <span className="text-sm text-gray-600">{opt.content}</span>
                            </div>
                        ))}
                    {block.answer?.field.type === "radio" &&
                        block.answer.field.options?.map((opt: TextBlock) => (
                            <div className="flex items-center gap-2" key={opt.id}>
                                <input type="radio" disabled />
                                <span className="text-sm text-gray-600">{opt.content}</span>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};
