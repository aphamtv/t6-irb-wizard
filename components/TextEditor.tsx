"use client";

import { EditorContent, EditorRoot } from "novel";
import { useState, FC } from "react";

const TailwindEditor: FC = () => {
  const [content, setContent] = useState<any | null>(null);

  return (
    <EditorRoot>
      <EditorContent
        initialContent={content}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          setContent(json);
        }}
      />
    </EditorRoot>
  );
};

export default TailwindEditor;