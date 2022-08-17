import "./Notescard.css";
function LabelNotesCard({ labeledNotesData }) {
  const {
    notesBgColor,
    labelInputBoxValue,
    textareaBoxValue,
    inputTextTitleValue,
    priorityRadioBoxValue,
    noteCreationTime,
  } = labeledNotesData;

  return (
    <div>
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
        </div>
      </div>
    </div>
  );
}

export default LabelNotesCard;
