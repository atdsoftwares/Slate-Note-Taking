import React from "react";
import { Link } from "react-router-dom";
import { useArchiveContext } from "../Context/ArchiveNotesContext";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import { useTrashNotesContext } from "../Context/TrashNotesContext";

import "./Notescard.css";
function Notescard({ notesData }) {
  const {
    inputTextTitleValue,
    priorityRadioBoxValue,
    textareaBoxValue,
    notesBgColor,
    noteCreationTime,
    labelInputBoxValue,
    _id,
  } = notesData;
  const { postArchiveNotesFn } = useArchiveContext();
  const { postNotesToTrashFn } = useTrashNotesContext();
  const { editData } = useNoteTakingContext();

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
          {/* <Link to={`/Edit/${_id}`}> */}
          <span
            className="material-icons notesmi"
            // onClick={() => editData(_id)}
          >
            edit{" "}
          </span>
          {/* </Link> */}
          <span
            className="material-icons notesmi"
            onClick={() => postNotesToTrashFn(_id, notesData)}
          >
            delete{" "}
          </span>
          <span
            className="material-icons notesmi"
            onClick={() => postArchiveNotesFn(_id, notesData)}
          >
            archive{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Notescard;
