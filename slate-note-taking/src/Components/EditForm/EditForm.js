import React from "react";
import { useParams } from "react-router-dom";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import RTEEditor from "../Editor/RTEEditor";
import "./EditForm.css";
function EditForm() {
  const { setGetParams } = useNoteTakingContext();
  const params = useParams();
  setGetParams(params);

  const {
    notesTakingFn,
    // priorityRadioBoxValue,
    // labelRadioBoxValue,
    addNotesintoDb,
    // notesBgColor,
    // notesModal,
    addToNotes,
  } = useNoteTakingContext();
  console.log(
    "🚀 ~ file: EditForm.js ~ line 20 ~ EditForm ~ newData",
    addToNotes
  );

  const {
    inputTextTitleValue,
    labelInputBoxValue,
    noteCreationTime,
    notesBgColor,
    priorityRadioBoxValue,
    textareaBoxValue,
  } = addToNotes;
  return (
    <div>
      <div
        className="notes1-container"
        style={{
          backgroundColor: notesBgColor,
        }}
      >
        <div className="form-container">
          <form onSubmit={addNotesintoDb}>
            <input
              type="text"
              name="name"
              required
              value={inputTextTitleValue}
              class="navigation__input"
              placeholder="notes Title....!"
              onChange={(e) =>
                notesTakingFn({
                  type: "INPUTTEXTTITLEVALUE",
                  payload: e.target.value,
                })
              }
            />
            <label className="label-radio-box">
              Priority
              <input
                type="radio"
                name="priority"
                value={priorityRadioBoxValue}
                required
                checked={priorityRadioBoxValue === "top"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "PRIORITYRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />
              Top
              <input
                type="radio"
                name="priority"
                value={priorityRadioBoxValue}
                required
                checked={priorityRadioBoxValue === "medium"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "PRIORITYRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />
              Medium
              <input
                type="radio"
                name="priority"
                value={priorityRadioBoxValue}
                required
                checked={priorityRadioBoxValue === "low"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "PRIORITYRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />
              Low{" "}
            </label>
            <input
              type="text"
              name="name"
              value={labelInputBoxValue}
              required
              class="navigation__input"
              placeholder="add labels....!"
              onChange={(e) =>
                notesTakingFn({
                  type: "LABELINPUTBOXVALUE",
                  payload: e.target.value,
                })
              }
            />
            <div className="rte-icons">
              <RTEEditor textareaBoxValue={textareaBoxValue} />
            </div>

            <div className="color-pallete">
              <input type="submit" className="take-notes-btn" />
              <label>
                <input
                  type="color"
                  className="input-color"
                  value={notesBgColor}
                  onChange={(e) =>
                    notesTakingFn({
                      type: "NOTESBGCOLOR",
                      payload: e.target.value,
                    })
                  }
                />
                <span className="material-icons rte-icons1">color_lens </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
