import React from "react";
import Editor from "@monaco-editor/react";
import EditorHeading from "./EditorHeading";
import { EditorWrapper } from "./Editor.Elements";

const Editors = (prop) => {
  const { value, lang, setValue, displayName } = prop;
  function handleEditorChange(value, event) {
    setValue(value);
  }

  return (
    <td>
      <EditorWrapper>
        <EditorHeading name={displayName} />
      </EditorWrapper>
      <EditorWrapper>
        <Editor
          width="100%"
          height="50vh"
          defaultLanguage={lang}
          defaultValue={value}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </EditorWrapper>
    </td>
  );
};

export default Editors;
