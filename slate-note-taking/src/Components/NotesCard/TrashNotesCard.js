import { useTrashNotesContext } from "../../Context/IndexAllContext";
import {
  deleteTrashedNotesFn,
  restoreTrashedNotesFn,
} from "../../Services/TrashNotesServices";
import "./Notescard.css";
function TrashNotesCard({ trashnotesdata }) {
  const { notesTrashFn } = useTrashNotesContext();
  const {
    inputTextTitleValue,
    priorityRadioBoxValue,
    textareaBoxValue,
    notesBgColor,
    noteCreationTime,
    labelInputBoxValue,
    _id,
  } = trashnotesdata;

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
            onClick={() => deleteTrashedNotesFn(_id, notesTrashFn)}
          >
            delete
          </span>
          <span
            className="material-icons notesmi"
            onClick={() => restoreTrashedNotesFn(_id, notesTrashFn)}
          >
            restore_from_trash
          </span>
        </div>
      </div>
    </div>
  );
}
export default TrashNotesCard;
