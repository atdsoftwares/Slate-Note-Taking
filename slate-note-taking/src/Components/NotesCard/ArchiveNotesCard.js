import React from "react";
import { useArchiveContext } from "../Context/ArchiveNotesContext";
import "./Notescard.css";
function ArchiveNotesCard({ archivenotesdata }) {
  const { deleteArchiveNotesFn, restoreArchiveNotesFn } = useArchiveContext();
  const {
    inputTextTitleValue,
    priorityRadioBoxValue,
    textareaBoxValue,
    notesBgColor,
    noteCreationTime,
    labelInputBoxValue,
    _id,
  } = archivenotesdata;

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
            <span className="label-text"> {labelInputBoxValue}</span>
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
          <span
            className="material-icons notesmi"
            onClick={() => restoreArchiveNotesFn(_id)}
          >
            unarchive
          </span>
          <span
            className="material-icons notesmi"
            onClick={() => deleteArchiveNotesFn(_id)}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArchiveNotesCard;
