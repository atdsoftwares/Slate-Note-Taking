import React from "react";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import "./Notescard.css";
function Notescard({ notesData }) {
  const {
    inputTextTitleValue,
    labelRadioBoxValue,
    priorityRadioBoxValue,
    textareaBoxValue,
    notesBgColor,
    noteCreationTime,
  } = notesData[0];

  return (
    <div style={{ margin: "0.5rem" }}>
      <div className="notes-card" style={{ backgroundColor: notesBgColor }}>
        <h2> {inputTextTitleValue}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: textareaBoxValue }}
          className="title"
        />

        <div className="chips-container">
          <span className="material-icons notesmi chips">
            label
            <span className="label-text"> {labelRadioBoxValue}</span>
          </span>
        </div>
        <div className="chips-container">
          <span className="material-icons notesmi chips">
            priority_high
            <span className="label-text"> {priorityRadioBoxValue}</span>
          </span>
        </div>
        <sub> created at : {noteCreationTime} </sub>
        <div className="action-icons">
          <span className="material-icons notesmi">edit </span>
          <span className="material-icons notesmi">archive </span>
          <span className="material-icons notesmi">delete </span>
        </div>
      </div>
    </div>
  );
}

export default Notescard;
