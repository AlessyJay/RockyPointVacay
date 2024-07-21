import React from "react";
import { Bold, Strikethrough, Italic, Underline } from "lucide-react";
import { type Editor } from "@tiptap/react";
import { cn } from "@/lib/utils";

interface Props {
  editor: Editor | null;
  content: string;
}

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) return null;
  return (
    <div className="flex w-full flex-wrap items-start justify-between gap-5 rounded-t-md border px-4 py-3">
      <div className="flex w-full flex-wrap items-center justify-start gap-5 lg:w-10/12">
        <span
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={cn(
            editor.isActive("bold")
              ? "cursor-pointer rounded-lg bg-primary p-2 font-bold text-white"
              : "cursor-pointer p-2",
          )}
        >
          <Bold size={20} />
        </span>

        <span
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={cn(
            editor.isActive("italic")
              ? "cursor-pointer rounded-lg bg-primary p-2 italic text-white"
              : "cursor-pointer p-2",
          )}
        >
          <Italic size={20} />
        </span>

        <span
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={cn(
            editor.isActive("strike")
              ? "cursor-pointer rounded-lg bg-primary p-2 font-bold text-white"
              : "cursor-pointer p-2",
          )}
        >
          <Strikethrough size={20} />
        </span>

        <span
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={cn(
            editor.isActive("underline")
              ? "cursor-pointer rounded-lg bg-primary p-2 font-bold text-white"
              : "cursor-pointer p-2",
          )}
        >
          <Underline size={20} />
        </span>
      </div>
    </div>
  );
};

export default Toolbar;
