import { useArchiveContext } from "../../Context/IndexAllContext";
import {
  deleteArchiveNotesFn,
  restoreArchiveNotesFn,
} from "../../Services/ArchiveNotesServices";
import "./Notescard.css";
function ArchiveNotesCard({ archivenotesdata }) {
  const { notesArchiveFn } = useArchiveContext();
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
        <h3 className="input-text-value"> {inputTextTitleValue}</h3>
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
            onClick={() => restoreArchiveNotesFn(_id, notesArchiveFn)}
          >
            unarchive
          </span>
          <span
            className="material-icons notesmi"
            onClick={() => deleteArchiveNotesFn(_id, notesArchiveFn)}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArchiveNotesCard;
