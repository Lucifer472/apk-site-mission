"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";

const Editor = ({
  initialData,
  setData,
}: {
  initialData?: EditorJS.OutputData;
  setData: (v: string) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<EditorJS | null>(null);

  const defaultValueRef = useRef(initialData);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const editor = container.appendChild(
      container.ownerDocument.createElement("div")
    );

    const edit = new EditorJS({
      holder: editor,
      tools: {
        header: Header,
        list: {
          class: EditorjsList as unknown as EditorJS.ToolConstructable,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
      },
      data: defaultValueRef.current,
      placeholder: "Let`s write an awesome Apps Features!",
      onChange: async () => {
        if (editorRef.current) {
          editorRef.current
            .save()
            .then((res) => {
              setData(JSON.stringify(res));
            })
            .catch((error) => {
              console.log(error);
              toast.error("Unable to save Editor");
            });
        }
      },
    });

    editorRef.current = edit;

    return () => {
      if (container) {
        container.innerHTML = "";
      }

      if (editorRef) {
        editorRef.current = null;
      }
    };
  }, [setData]);

  return (
    <div className="space-y-2 px-2">
      <span className="font-medium">App Features</span>
      <div
        ref={containerRef}
        className="border prose border-neutral-300 shadow-sm focus:outline rounded-md w-full flex items-center justify-center py-6"
      ></div>
    </div>
  );
};

export default Editor;
