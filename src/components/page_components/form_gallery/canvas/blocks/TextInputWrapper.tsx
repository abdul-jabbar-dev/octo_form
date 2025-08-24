import React, { useState, useEffect } from "react";

type TextInputWrapper = {
  content?: string | null;
  onChange?: (updated: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
};

export const TextInputWrapper = ({
  content: initialContent,
  onChange,
  placeholder = "Enter text...",
  autoFocus = true,
  className = "",
}: TextInputWrapper) => {
  const [editing, setEditing] = useState(!initialContent);
  const [content, setContent] = useState(initialContent || "");

  // যদি parent থেকে content পরিবর্তিত হয়, internal state update হবে
  useEffect(() => {
    setContent(initialContent || "");
  }, [initialContent]);

  const handleBlur = () => {
    setEditing(false);
    onChange?.(content);
  };

  return (
    <div className={className}>
      {editing ? (
        <input
          type="text"
          autoFocus={autoFocus}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="border rounded px-2 py-1 w-full"
        />
      ) : (
        <p
          className="cursor-pointer px-2 py-1"
          onDoubleClick={() => setEditing(true)}
        >
          {content || placeholder}
        </p>
      )}
    </div>
  );
};
