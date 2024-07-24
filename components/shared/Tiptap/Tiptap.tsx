"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";

const Tiptap = ({ onChange, content }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content,
    editorProps: {
      attributes: {
        class:
          "flex flex-col justify-start flex-wrap max-w-full px-4 py-3 overflow-y-auto h-[255px] border-x rounded-b-md border-b border-gray-700 text-black items-start w-full outline-none",
      },
    },

    immediatelyRender: false,

    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col overflow-hidden rounded-md border">
      <Toolbar editor={editor} content={content} />
      <div className="h-[255px] overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
