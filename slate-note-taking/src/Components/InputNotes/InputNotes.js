import React, { useState } from "react";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import RTEEditor from "../Editor/RTEEditor";
import "./InputNotes.css";
function InputNotes() {
  const {
    notesTakingFn,
    priorityRadioBoxValue,
    labelRadioBoxValue,
    addNotesintoDb,
    notesBgColor,
    notesModal,
  } = useNoteTakingContext();
  console.log(
    "🚀 ~ file: InputNotes.js ~ line 14 ~ InputNotes ~ notesModal",
    notesModal
  );

  return (
    <div>
      <div
        className="notes1-container"
        style={{ backgroundColor: notesBgColor, display: notesModal }}
        defaultValue="#FFFF"
      >
        <div className="form-container">
          <form onSubmit={addNotesintoDb}>
            <input
              type="text"
              name="name"
              required
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
                value="top"
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
                value="medium"
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
                value="low"
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
            <label className="label1-radio-box">
              Labels
              <input
                type="radio"
                value="food"
                required
                name="label"
                checked={labelRadioBoxValue === "food"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "LABELRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />{" "}
              Food
              <input
                type="radio"
                value="home"
                required
                name="label"
                checked={labelRadioBoxValue === "home"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "LABELRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />{" "}
              Home
              <input
                type="radio"
                name="label"
                required
                value="office"
                checked={labelRadioBoxValue === "office"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "LABELRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />{" "}
              Office
            </label>
            <div className="rte-icons">
              <RTEEditor />
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

export default InputNotes;
