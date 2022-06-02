import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./RTEEditor.css";
import { useNoteTakingContext } from "../Context/NotetakingContext";
function RTEEditor() {
  const { textareaBoxValue, notesTakingFn } = useNoteTakingContext();

  return (
    <div>
      <ReactQuill
        theme="snow"
        required
        value={textareaBoxValue}
        onChange={(event) =>
          notesTakingFn({ type: "TEXTAREABOXVALUE", payload: event })
        }
        className="editor"
      />
    </div>
  );
}

export default RTEEditor;
