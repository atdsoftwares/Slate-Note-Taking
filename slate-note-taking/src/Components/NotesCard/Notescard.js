import { React, Link } from "../../Utils/CustomUtils";
import { useNoteTakingContext } from "../../Context/IndexAllContext";
import "./Notescard.css";
import { postArchiveNotesFn } from "../../Services/ArchiveNotesServices";
import { postNotesToTrashFn } from "../../Services/TrashNotesServices";
import { editData } from "../../Services/NoteTakingServices";
function Notescard({ notesData }) {
  const { notesTakingFn } = useNoteTakingContext();
  const {
    inputTextTitleValue,
    priorityRadioBoxValue,
    textareaBoxValue,
    notesBgColor,
    noteCreationTime,
    labelInputBoxValue,
    _id,
    noteUpdatedAt,
  } = notesData;

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
        <div className="note-timing">
          <sub> created at : {noteCreationTime} </sub>
          <sub> updated at : {noteUpdatedAt} </sub>{" "}
        </div>

        <div className="action-icons">
          <Link to={`/Edit/${_id}`}>
            <span
              className="material-icons notesmi"
              onClick={() =>
                editData(
                  _id,
                  labelInputBoxValue,
                  textareaBoxValue,
                  priorityRadioBoxValue,
                  inputTextTitleValue,
                  notesBgColor
                )
              }
            >
              edit{" "}
            </span>
          </Link>
          <span
            className="material-icons notesmi"
            onClick={() => postNotesToTrashFn(_id, notesData, notesTakingFn)}
          >
            delete{" "}
          </span>
          <span
            className="material-icons notesmi"
            onClick={() => postArchiveNotesFn(_id, notesData, notesTakingFn)}
          >
            archive{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Notescard;
